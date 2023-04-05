import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Text,BackHandler } from 'react-native';
import { Video } from 'expo-av';
import Chapters from '../screens/Chapters';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const VideoPage = ({navigation}) => {
  const route = useRoute();
  const { vedio, title, duration, percent, description, color,active } = route.params;
  const setOrientation = () => {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      // Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      // Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const backAction = async () => {
      // Handle the back button press event here
      const status = await video.getStatusAsync();
      if (status.isLoaded) {
        const { durationMillis, positionMillis } = status;
        console.log(`percentage:  ${(positionMillis*100/durationMillis)}`);

        if (positionMillis > 0 && positionMillis === durationMillis) {
          console.log('Video finished playing');
        }
      }
      navigation.goBack();
    
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup function to remove the event listener
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#13BCAF" />
      <Video
        ref={videoRef}
        source={{ uri: vedio }}
        rate={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={false}
        useNativeControls
        style={styles.video}
        onFullscreenUpdate={setOrientation}
      />
      <Chapters color={color} percent={percent} duration={duration} title={title} num={1} active={active} />

      <Text
        style={{
          fontFamily: 'Medium',
          color: '#345c74',
          paddingLeft: 42,
          paddingRight: 35,
          justifyContent: 'center',
          alignItems: 'center',
          writingDirection: 'rtl',
          height: '25%',
        }}>
        {description}
      </Text>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 1.2,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

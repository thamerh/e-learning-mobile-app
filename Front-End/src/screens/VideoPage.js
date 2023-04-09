import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Text,BackHandler } from 'react-native';
import { Video } from 'expo-av';
import Chapters from '../screens/Chapters';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useRoute } from '@react-navigation/native';
import { usePreventScreenCapture } from 'expo-screen-capture';
import client from "../config/config"
const { width, height } = Dimensions.get('window');

const VideoPage = ({navigation}) => {
  usePreventScreenCapture(); //disabled screen capture
  const route = useRoute();
  const { num,id,vedio, title,theme, duration, percent, description, color,active,dataLesson,dataCours } = route.params;
  const setOrientation = () => {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      // Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      // Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };
 
  function getNextTheme(currentTheme, themes) {
    const currentIndex = themes.findIndex(theme => theme.theme === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length; // wrap around if at end
    return themes[nextIndex].theme;
  }

  function getNextId(currentId, data) {
    const currentIndex = data.findIndex(item => item.id === currentId);
    const nextIndex = (currentIndex +1) % data.length; // wrap around if at end of array
    return data[nextIndex].id;
  }
  const updatePercent = async (newPercent,id) => {
    try {
      const dataAPI = {
        percent: newPercent,

      };
      const response = await client.put(`/lesson/${id}`, dataAPI, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("response:", response.data);
    } catch (error) {
      console.error(" error:", error);
    }
  };
  const updateActive = async (id) => {
    try {
      const dataAPI = {
        active: 1,
        
      };
      const response = await client.put(`/lesson/${id}`, dataAPI, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("response:", response.data);
    } catch (error) {
      console.error(" error:", error);
    }
  };

  const updateLocked = async (theme) => {
    console.log(theme)
    try {
      const dataAPI = {
        active: 1,
        
      };
      const response = await client.put(`/cours/${theme}`, dataAPI, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("response:", response.data);
    } catch (error) {
      console.error(" error:", error);
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
        if(percent<(positionMillis*100/durationMillis)){
          updatePercent((positionMillis*100/durationMillis).toFixed(0),id)
          if((positionMillis*100/durationMillis).toFixed(0)>=90){
            if(num<(dataLesson.length-1)){
              updateActive(getNextId(id, dataLesson))
          }else {
            updateLocked(getNextTheme(theme,dataCours ))
          }
          }
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
        resizeMode="stretch"
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

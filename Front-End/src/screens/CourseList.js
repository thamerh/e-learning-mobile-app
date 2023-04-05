import React from 'react';
import { Text, TouchableOpacity, View, Image, } from 'react-native';
import ProgressCircle from 'progress-circle-react-native'
import { Fontisto } from '@expo/vector-icons';

const CourseList = ({ img, title, bg, onPress,locked }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: bg,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Image source={img} style={{ width: 40, height: 40 , resizeMode: 'contain', borderRadius:20,}} />

      <View>
        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Bold',
            fontSize: 13,
            paddingHorizontal: 20,
            width: 200,
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: '#f58084',
            fontFamily: 'Medium',
            fontSize: 12,
            paddingHorizontal: 20,
            alignSelf: 'center',
            textAlign: 'center',
            
          }}
        >
          10 hours, 19 lessons
        </Text>
      </View>
      {/* <Text
        style={{
          color: '#345c74',
          fontFamily: 'Medium',
          fontSize: 13,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        25%
      </Text> */}
      <ProgressCircle
        percent={30}
        radius={17}
        borderWidth={1.5}
        color="#f580084"
        shadowColor="#FFF"
        bgColor="#FFF"
        
      >
       {locked?<Fontisto name="unlocked" size={15} color={"#13BCAF"} />:<Fontisto name="locked" size={15} color="#f58084" />}
      </ProgressCircle>
    </TouchableOpacity>
  );
};

export default CourseList;

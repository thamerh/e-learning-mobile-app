import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ProgressCircle from 'progress-circle-react-native'
import { Fontisto } from '@expo/vector-icons';



const Chapters = ({ title, num, duration, percent, color, onPress,active }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: color,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 6,
          
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: 'Bold',
          }}
        >
          {num}
        </Text>
      </View>
      <View >
        <Text
          style={{
            color: '#345c74',
            fontFamily: 'Bold',
            fontSize: 15,
            paddingLeft: 20,
            width: 180,
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: '#f58084',
            fontSize: 12,
            fontFamily: 'Medium',
            paddingLeft: 20,
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          {duration}
        </Text>
      </View>
      {active?(<><Text
        style={{
          color: '#345c74',
          fontFamily: 'Medium',
          fontSize: 11,
          width: 60,
          paddingLeft: 25,
        }}
      >
        {percent}%
      </Text>
      <ProgressCircle
      
        percent={percent}
        radius={17}
        borderWidth={1.5}
        color="#f58084"
        shadowColor="#FFF"
        bgColor="#fff2f2"
      >
        <Image source={require('../images/pl.png')} />
      </ProgressCircle></>) :
      <View style={{ paddingLeft: 57,}}>
      <ProgressCircle
        percent={30}
        radius={17}
        borderWidth={1.5}
        color="#f580084"
        shadowColor="#FFF"
        bgColor="#FFF"
        
      >
       <Fontisto name="locked" size={15} color="#f58084" />
      </ProgressCircle>
      </View>}
    </TouchableOpacity>
  );
};

export default Chapters;

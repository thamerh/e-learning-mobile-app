import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import { useRoute } from "@react-navigation/native";


export default function WrittingCoppy() {
    const route = useRoute();
    const { title, content,img } = route.params;
    const regex = /(\d+)/g; // match numbers in the content
    const parts = content.split(regex); // split content into parts around the numbers
return (
    <LinearGradient
    colors={["rgb(94,245,213)", "rgb(19,188,175)", "rgb(31,238,198)"]}
    style={{ width: "100%", height: "100%" }}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    locations={[0, 0.49, 1]}
  >
   
   <Image
        source={img}
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginTop: "25%",
          resizeMode: "contain",
          marginVertical: 10,
        }}
      />
      <Text
        style={{
          color: "#FFF",
          fontFamily: "arabicFont1",
          fontSize: 30,
          width: "100%",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {title}
      </Text>

    <Modalize
      handleStyle={{
        marginTop: 20,
        backgroundColor: "#e9e9e9",
        width: 80,
      }}
      modalStyle={{
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: "auto", // Set a fixed height for the modal
        overflow: "hidden", // Hide content that exceeds the modal height
      }}
      alwaysOpen={500}
      scrollViewProps={{
        showsVerticalScrollIndicator: false, // Hide the scroll indicator
        contentContainerStyle: {
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Set a fixed height for the modal
          //overflow: "hidden", // Hide content that exceeds the modal height
        },
      }}
      adjustToContentHeight="true"
    >
      <View style={{ marginTop: 25 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.content}>
      {parts.map((part, index) => {
        if (regex.test(part)) {
          // apply different style to the numbers
          return <Text key={index} style={styles.number}>{part}</Text>;
        }
        // apply default style to the Arabic text
        return <Text key={index}>{part}</Text>;
      })}
    </Text>
    </ScrollView>
        
      </View>
    </Modalize>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      
    },
    content: {
     fontFamily: 'arabicFont',
      fontSize: 16,
      lineHeight: 30,
      color: '#333333', // or any other suitable text color
      textAlign: 'right',
    },
    number: {
      fontFamily: 'Medium',
    },
  });
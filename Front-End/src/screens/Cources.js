import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";

import CourseList from "../screens/CourseList";
const data = {
  infractions: "المخالفات و العقوبات",
  panneaux: "العلامات و الإشارات",
  priorite: "الأولوية",
  regles: "قواعد الجولان",
  secourisme: "الإسعافات الأولية",
  croisement: "المقاطعة و المجاوزة",
  vehicules: "السّواق و العربات",
  arret: "الوقوف و التّوقف",
  mecanique: "الصّيانة",
  themeMd: "نقل المواد الخطرة",
  themeC: "صنف ج",
  themeA: "صنف أ",
  themeB: "صنف ب",
  themeCe: "صنف ج+ه",
  themeD: "صنف د",
  themeD1: "صنف د1",
};

const Courses = ({ navigation }) => {

  const dataList = [
    {
      img: require("../images/infractions.jpg"),
      title: data.infractions,
      secreen:"infractions",
      bg: "#c1fffb",
      locked: true,
    },
    {
      img: require("../images/panneaux.jpg"),
      title: data.panneaux,
      secreen:"panneaux",
      bg: "#b9fff2",
     
    },
    {
      img: require("../images/priorite.jpg"),
      title: data.priorite,
      secreen:"priorite",
      bg: "#b1ece7",
    },
    {
      img: require("../images/regle.jpg"),
      title: data.regles,
      secreen:"regles", 
      bg: "#c1fffb",
    },
    {
      img: require("../images/secourisme.jpg"),
      title: data.secourisme,
      secreen:"secourisme", 
      bg: "#b9fff2",
     
    },
    {
      img: require("../images/priorite.jpg"),
      title: data.croisement,
      secreen:"croisement", 
      bg: "#b1ece7",
    },
    {
      img: require("../images/driver.jpg"),
      title: data.vehicules,
      secreen:"vehicules", 
      bg: "#c1fffb",
    },
    {
      img: require("../images/arret.jpg"),
      title: data.arret,
      secreen:"arret", 
      bg: "#b9fff2",
      
    },
    {
      img: require("../images/mecanique.jpg"),
      title: data.mecanique,
      secreen:"mecanique", 
      bg: "#b1ece7",
    },
    {
      img: require("../images/md.jpg"),
      title: data.themeMd,
      secreen:"themeMd", 
      bg: "#c1fffb",
    },
    {
      img: require("../images/catC.jpg"),
      title: data.themeC,
      secreen:"themeC", 
      bg: "#b9fff2",
     
    },
    {
      img: require("../images/catA.jpg"),
      title: data.themeA,
      secreen:"themeA", 
      bg: "#b1ece7",
    },
    {
      img: require("../images/catB.jpg"),
      title: data.themeB,
      secreen:"themeB", 
      bg: "#c1fffb",
    },
    {
      img: require("../images/catC1.jpg"),
      title: data.themeCe,
      secreen:"themeCe", 
      bg: "#b9fff2",
     
    },
    {
      img: require("../images/catD.jpg"),
      title: data.themeD,
      secreen:"themeD", 
      bg: "#b1ece7",
    },
    {
      img: require("../images/catD1.jpg"),
      title: data.themeD1,
      secreen:"themeD1", 
      bg: "#c1fffb",
    },
  ];

  return (
    <LinearGradient
      colors={["rgb(94,245,213)", "rgb(19,188,175)", "rgb(31,238,198)"]}
      style={styles.background}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 0.49, 1]}
    >

      <Text
        style={{
          color: "#FFF",
          fontSize: 35,
          fontFamily: "Bold",
          width: 200,
          alignSelf: "center",
          textAlign: "center",
          marginTop: "40%",
        }}
      >
        Mes Cours
      </Text>
      <Modalize
        handleStyle={{
          marginTop: 30,
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
    
        <ScrollView 
  style={{ flex: 1, backgroundColor: 'white' }} >
  {dataList.map((item, index) => (
    <CourseList
    key={index}
    onPress={() => item.locked === true ? navigation.push("Lesson", {
      title: item.title,
      img: item.img,
      color: item.bg
    }) : null}
    img={item.img}
    title={item.title}
    bg={item.bg}
    locked={item.locked}
  />
  
  ))}
</ScrollView>

        
      </Modalize>
    </LinearGradient>
  );
};

export default Courses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import Chapters from "./Chapters";
import { useRoute } from "@react-navigation/native";
import data from "../config/StaticData";
import client from "../config/config";
import {backendURL} from "../config/BasedURL";
import { useIsFocused } from '@react-navigation/native';


const Lesson = ({ navigation }) => {
  const [arabicTitle, setArabicTitle] = useState("");
  const [image, setImage] = useState(null);
  const [dataSerie, setDataSerie] = useState([]);
  const [dataLesson, setDataLesson] = useState([]);
  const route = useRoute();
  const isFocused = useIsFocused();
  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const hoursText = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}, ` : "";
    const minutesText = `${minutes} minute${minutes > 1 ? "s" : ""}`;
    return `${hoursText}${minutesText}`;
  }
  const handlePress = () => {
    //console.log("WrittingCoppy")
    navigation.push("WrittingCoppy", {
      title: arabicTitle,
      content: description,
      img: image,
    });
  };
  const { title, description,dataCours } = route.params;
  const getDataLesson = (title) => {
    client
      .get("/lesson")
      .then((response) => {
        const items= response.data
        const filteredItems = items.filter(item => item.theme === title);
        setDataSerie(filteredItems);
       
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (isFocused) {
      // Do something when this screen is focused
      //console.log('This screen is focused.');
     getDataLesson(title);
    }
  }, [isFocused]);
  useEffect(() => {
    if (dataSerie.length === 0) {
      getDataLesson(title);
    }
    // getDataCours();
  }, [dataSerie]);

  useEffect(() => {
    switch (title) {
      case "infractions":
        setArabicTitle(data.infractions);
        setImage(require("../images/infractions.jpg"));
        break;
      case "panneaux":
        setArabicTitle(data.panneaux);
        setImage(require("../images/panneaux.jpg"));
        break;
      case "priorite":
        setArabicTitle(data.priorite);
        setImage(require("../images/priorite.jpg"));
        break;
      case "regles":
        setArabicTitle(data.regles);
        setImage(require("../images/regle.jpg"));
        break;
      case "secourisme":
        setArabicTitle(data.secourisme);
        setImage(require("../images/secourisme.jpg"));
        break;
      case "croisement":
        setArabicTitle(data.croisement);
        setImage(require("../images/priorite.jpg"));
        break;
      case "vehicules":
        setArabicTitle(data.vehicules);
        setImage(require("../images/driver.jpg"));
        break;
      case "arret":
        setArabicTitle(data.arret);
        setImage(require("../images/arret.jpg"));
        break;
      case "mecanique":
        setArabicTitle(data.mecanique);
        setImage(require("../images/mecanique.jpg"));
        break;
      case "themeMd":
        setArabicTitle(data.themeMd);
        setImage(require("../images/md.jpg"));
        break;
      case "themeC":
        setArabicTitle(data.themeC);
        setImage(require("../images/catC.jpg"));
        break;
      case "themeA":
        setArabicTitle(data.themeA);
        setImage(require("../images/catA.jpg"));
        break;
      case "themeB":
        setArabicTitle(data.themeB);
        setImage(require("../images/catB.jpg"));
        break;
      case "themeCe":
        setArabicTitle(data.themeCe);
        setImage(require("../images/catC1.jpg"));
        break;
      case "themeD":
        setArabicTitle(data.themeD);
        setImage(require("../images/catD.jpg"));
        break;
      case "themeD1":
        setArabicTitle(data.themeD1);
        setImage(require("../images/catD1.jpg"));
        break;
    }
  }, [title, data]);
  // const vedio ="http://localhost:8000/uploads/1680969774422-338953725_8976824145720843_879641568784864665_n.mp4";
  const getChapterColor = (() => {
    let lastIndexUsed = -1;
    const colors = ["#c1fffb", "#b9fff2", "#b1ece7"];

    return () => {
      lastIndexUsed = (lastIndexUsed + 1) % colors.length;
      return colors[lastIndexUsed];
    };
  })();

  useEffect(() => {
    if (dataSerie.length > 0) {
      makeData(dataSerie);
    }
  }, [dataSerie]);
  const makeData = (dataS) => {
    let datas = [];
    for (let i = 0; i < dataS.length; i++) {
      let myObj = {
        num: i,
        id: dataS[i].id,
        vedio: `${backendURL}/uploads/${dataS[0].filename}`,
        title: dataS[i].title,
        color: getChapterColor(),
        active: dataS[i].active === 0 ? false : true,
        description: dataS[i].description,
        duration: formatDuration(dataS[i].duration),
        theme: dataS[i].theme,
        percent: dataS[i].percent,
      };
       console.log("objet ",myObj)
      datas.push(myObj);
    }
    setDataLesson(datas);
  };

  return (
    <LinearGradient
      colors={["rgb(94,245,213)", "rgb(19,188,175)", "rgb(31,238,198)"]}
      style={{ width: "100%", height: "100%" }}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 0.49, 1]}
    >
      <Image
        source={image}
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
          //fontFamily: 'Medium',
          fontSize: 30,
          width: "100%",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        {arabicTitle}
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
        <View style={{ marginTop: 15 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {dataLesson.map((chapter, index) => (
              <Chapters
                key={index}
                num={chapter.num}
                color={chapter.color}
                percent={chapter.percent}
                duration={chapter.duration}
                title={chapter.title}
                onPress={
                  chapter.active
                    ? () =>
                        navigation.push("VideoPage", {
                          id:chapter.id,
                          vedio: chapter.vedio,
                          title: chapter.title,
                          theme: title,
                          duration: chapter.duration,
                          percent: chapter.percent,
                          description: chapter.description,
                          color: chapter.color,
                          active: chapter.active,
                          img: chapter.img,
                          dataLesson:dataLesson,
                          dataCours:dataCours,
                          num:chapter.num
                        })
                    : null
                }
                active={chapter.active}
              />
            ))}
            <TouchableOpacity onPress={handlePress}>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  backgroundColor: "#13BCAF",
                  marginHorizontal: 40,
                  paddingVertical: 15,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: "Bold",
                    fontSize: 15,
                    marginRight: 50,
                  }}
                >
                  ملخص هذا المحور
                </Text>
                <Image source={require("../images/a3.png")} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modalize>
    </LinearGradient>
  );
};
export default Lesson;

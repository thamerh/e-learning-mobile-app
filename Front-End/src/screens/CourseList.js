import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import ProgressCircle from "progress-circle-react-native";
import { Fontisto } from "@expo/vector-icons";
import data from "../config/StaticData";

const CourseList = ({ title, bg, onPress, locked, duration, nbLessons }) => {
  const [arabicTitle, setArabicTitle] = useState("");
  const [image, setImage] = useState(null);

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

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: bg,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Image
        source={image}
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
          borderRadius: 20,
        }}
      />

      <View>
        <Text
          style={{
            color: "#345c74",
            fontFamily: "Bold",
            fontSize: 13,
            paddingHorizontal: 20,
            width: 200,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {arabicTitle}
        </Text>
        <Text
          style={{
            color: "#f58084",
            fontFamily: "Medium",
            fontSize: 12,
            paddingHorizontal: 20,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {duration} , {nbLessons} lessons
        </Text>
      </View>
      <ProgressCircle
        percent={30}
        radius={17}
        borderWidth={1.5}
        color="#f580084"
        shadowColor="#FFF"
        bgColor="#FFF"
      >
        {locked ? (
          <Fontisto name="unlocked" size={15} color={"#13BCAF"} />
        ) : (
          <Fontisto name="locked" size={15} color="#f58084" />
        )}
      </ProgressCircle>
    </TouchableOpacity>
  );
};

export default CourseList;

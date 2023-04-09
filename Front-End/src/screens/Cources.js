import React,{useState,useEffect} from "react";
import {  Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import client from "../config/config"
import { useIsFocused } from '@react-navigation/native';
import CourseList from "../screens/CourseList";


const Courses = ({ navigation }) => {
  const [dataSerie, setDataSerie] = useState([]);
  const [dataCours, setDataCours] = useState([]);
  const isFocused = useIsFocused();
  const getChapterColor = (() => {
    let lastIndexUsed = -1;
    const colors = ["#c1fffb", "#b9fff2", "#b1ece7"];
    return () => {
      lastIndexUsed = (lastIndexUsed + 1) % colors.length;
      return colors[lastIndexUsed];
    };
  })();
  useEffect(() => {
    if (isFocused) {
      // Do something when this screen is focused
      //console.log('This screen is focused.');
      getDataCours();
    }
  }, [isFocused]);
  const getDataCours = () => {
    client
      .get("/cours")
      .then((response) => {
        setDataSerie(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const hoursText = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}, ` : '';
    const minutesText = `${minutes} minute${minutes > 1 ? 's' : ''}`;
    return `${hoursText}${minutesText}`;
  }
  useEffect(() => {
    if (isFocused) {
      // Do something when this screen is focused
      //console.log('This screen is focused.');
      getDataCours();
    }
  }, [isFocused]);
useEffect(() => {
  if (dataSerie.length === 0) {
    getDataCours();
  }
  // getDataCours();
}, [dataSerie]);

useEffect(() => {
  if(dataSerie.length>0){
    makeData(dataSerie) 
  }

}, [dataSerie]);
const makeData = (dataS) => {
  let datas = [];
  for (let i = 0; i < dataS.length; i++) {
    let myObj = {
      id: i,
      img: `../images/${dataS[0].theme}.jpg`,
      title:dataS[i].theme,
      bg: getChapterColor(),
      locked: dataS[i].active === 0 ? false : true,
      description: dataS[i].description,
      duration: formatDuration(dataS[i].duration),
      nbLessons: dataS[i].nbLessons,
    };
    // console.log("objet ",myObj)
    datas.push(myObj);
  }

  setDataCours(datas);
};
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
  {dataCours.map((item, index) => (
    <CourseList
    key={index}
    onPress={() => item.locked === true ? navigation.push("Lesson", {
      title: item.title,
      img: item.img,
      color: item.bg,
      description:item.description,
      dataCours:dataSerie
    }) : null}
    img={item.img}
    title={item.title}
    bg={item.bg}
    locked={item.locked}
    duration={item.duration}
    nbLessons={item.nbLessons}
    
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

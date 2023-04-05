import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import Chapters from "./Chapters";
import { useRoute } from "@react-navigation/native";

const Lesson = ({ navigation }) => {
  const route = useRoute();
  const handlePress=()=>{
    //console.log("WrittingCoppy")
    navigation.push("WrittingCoppy", {
      title,
      content:"أهم المخالفات في قانون الطرقات التونسي\nالمخالفات (ملخص )\n\nv مخالفة عادية: خطية 20د\n· عدم استعمال أضواء تغيير الاتجاه\n· السير في الاتجاه الممنوع\n· الوقوف والتوقف بالأماكن الممنوعة ما عدا (بالطريق السيارة)\n· الوقوف بكيفية تكون فيها عجلتين على الرصيف وعجلتين على المعبّد.\n· السير بدون عجلة احتياطية\nv مخالفة خطيرة: خطية مالية أقصاها 60د\n· السير ليلا بدون إنارة\n· عدم استعمال الأضواء المناسبة (ضباب، أمطار)\n· عدم احترام الأولوية\n· عدم فسح المجال للعربات المستعملة للمنبهات الصّوتية (الحماية، الإسعاف..)\n· الوقوف والتوقف بجانب الوقوف الاضطراري بالطريق السيارة بدون موجب\n· تجاوز السرعة القصوى المسموح بها بأقل من 20 كلم/س\n· السير برخصة سياقة معلقة الصلوحية\nv الجنـــح:\nØ صنف 1: خطة مالية أقصاها 100د وعقوبة بالسجن مدة شهر واحد أو إحداهما وسحب الرخصة من 1 إلى 6 أشهر.\n· عدم احترام علامة قف\n· عدم احترام الإشارات الضوئية\n· اختراق سكة حديديّة نزول الحواجز أو اشتغال الضوء\n· المجاوزة الممنوعة\n· صنف2: خطية مالية أقصاها 200د وسحب الرخصة من 1 إلى 6 أشهر\n· استعمال عربة تحدث ضجيجا أو ترسل أدخنة كثيفة يتجاوز المقاييس المسموح بها بنسبة تفوق 50%.",
      img:img,
    })
  }
  const { title, img } = route.params;
  const vedio ="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const getChapterColor = (() => {
    let lastIndexUsed = -1;
    const colors = ["#c1fffb", "#b9fff2", "#b1ece7"];
  
    return () => {
      lastIndexUsed = (lastIndexUsed + 1) % colors.length;
      return colors[lastIndexUsed];
    };
  })();


const chaptersData = [
  {
    num: 1,
    color: getChapterColor(),
    percent: 25,
    duration: "1 hours, 12 minutes",
    title: "مقدمة",
    description:"يمثل هذا الدرس كمقدمة عامة على محور المخالفات والعقوبات",
  },
  {
    num: 2,
    color: getChapterColor(),
    percent: 50,
    duration: "1 hours, 12 minutes",
    title: "قائمة في المخالفات المرورية",
    description:"يمثل هذا الدرس كمقدمة عامة على محور المخالفات والعقوبات",
  },
  {
    num: 3,
    color: getChapterColor(),
    percent: 0,
    duration: "1 hours, 12 minutes",
    title: "قائمة في الجنح المرورية",
    description:"يمثل هذا الدرس كمقدمة عامة على محور المخالفات والعقوبات",
  },
  {
    num: 4,
    color: getChapterColor(),
    percent: 0,
    duration: "2 hours, 20 minutes",
    title: "قائمة في الجنايات المرورية",
    description:"يمثل هذا الدرس كمقدمة عامة على محور المخالفات والعقوبات",
  },
  {
    num: 5,
    color: getChapterColor(),
    percent: 0,
    duration: "0 hours, 30 minutes",
    title: "الخاتمة",
    description:"يمثل هذا الدرس كمقدمة عامة على محور المخالفات والعقوبات",
  },
];
const activeIndex = 2; // set the active index here
const updatedChaptersData = chaptersData.map((chapter, index) => ({
  ...chapter,
  active: index < activeIndex ? 'active' : null,
}));


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
          //fontFamily: 'Medium',
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
            {updatedChaptersData.map((chapter, index) => (
              <Chapters
                key={index}
                num={chapter.num}
                color={chapter.color}
                percent={chapter.percent}
                duration={chapter.duration}
                title={chapter.title}
                onPress={chapter.active ?()=> navigation.push("VideoPage", {
                  vedio,
                  title:chapter.title,
                  duration: chapter.duration,
                  percent: chapter.percent,
                  description:chapter.description,
                  color:chapter.color,
                  active:chapter.active
                }):null}
                active={chapter.active}
              />
            ))}
           <TouchableOpacity onPress={handlePress}>
  <View style={{
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#13BCAF",
    marginHorizontal: 40,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20
  }}>
    <Text style={{
      color: "#FFF",
      fontFamily: "Bold",
      fontSize: 15,
      marginRight: 50
    }}>
      النسخة المكتوبة لهذا المحور
    </Text>
    <Image source={require('../images/a3.png')} />
  </View>
</TouchableOpacity>
          </ScrollView>
          
        </View>
      </Modalize>
    </LinearGradient>
  );
};
export default Lesson;

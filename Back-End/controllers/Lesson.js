import Lesson from "../models/lessonModel.js";
import Cours from "../models/coursModel.js";
import multer from "multer";
import {getVideoDurationInSeconds} from "get-video-duration"

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

export const upload = multer({ storage: storage });

export const createLesson = async (req, res) => {
  const {  description, title,  theme } = req.body;

  try {
    const cours = await Cours.findOne({ where: { theme: theme } });
    if (!cours) {
      return res.status(404).send("Cours not found");
    }
    
    const { filename } = req.file;
    const filePath = `uploads/${filename}`;
    console.log(filePath)

    const duration = await getVideoDurationInSeconds(filePath).then((duration) => {
      return (duration);
  });
  const lessonPos = await Lesson.findOne({ where: { theme: theme } });
  if(lessonPos==null){
    const lesson = await Lesson.create({
      active:1,
      description,
      title,
      percent:0,
      filename,
      theme,
      duration
    });
    res.status(201).json(lesson);
  }else{
    const lesson = await Lesson.create({
      active:0,
      description,
      title,
      percent:0,
      filename,
      theme,
      duration
    });
    res.status(201).json(lesson);
  }
    
    
      const updatedDuration = cours.duration + duration;
      const updatedNbLessons = cours.nbLessons + 1;
      await Cours.update(
        { duration: updatedDuration, nbLessons: updatedNbLessons },
        { where: { theme } }
      );

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading video" });
  }
};


//get all lesson
export const getLesson = async(req, res) =>{
  try {
      const response = await Lesson.findAll();
      res.status(200).json(response);
  } catch (error) {
      console.log(error.message);
  }
}


// 4. update lesson 

export const updateLesson = async (req, res) => {

  let id = req.params.id

   await Lesson.update(req.body, { where: { id }})

  res.status(200).send("lesson is updated")
 

}

// 5. delete lesson by id

export const deleteLesson = async (req, res) => {
  let id = req.params.id
  const lesson = await Lesson.findOne({ where: { id: id } });
  console.log(lesson)
  const cours = await Cours.findOne({ where: { theme: lesson.theme } });
  await Lesson.destroy({ where: { id }} )
  const updatedDuration = cours.duration - lesson.duration;
  const updatedNbLessons = cours.nbLessons - 1;
  await Cours.update(
    { duration: updatedDuration, nbLessons: updatedNbLessons },
    { where: { theme:lesson.theme } }
  );

  res.status(200).send('lesson is deleted !')

}

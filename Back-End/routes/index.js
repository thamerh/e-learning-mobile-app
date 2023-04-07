import express from "express";
import { createCours,getCours,updateCours,deleteCours } from "../controllers/Cours.js";
import { createLesson,upload,getLesson,updateLesson,deleteLesson} from '../controllers/Lesson.js';
const router = express.Router();
router.post('/cours', createCours);
router.get('/cours', getCours);
router.put('/cours/:theme', updateCours);
router.delete('/cours/:theme', deleteCours);
// router.post('/lesson' , createLesson,upload.single('video') );
router.post('/lesson', upload.single('video'), createLesson);
router.get('/lesson', getLesson);
router.put('/lesson/:id', updateLesson);
router.delete('/lesson/:id', deleteLesson);


export default router;
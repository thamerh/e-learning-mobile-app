import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();


app.use(express.urlencoded({ extended: true }));



// testing 
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen(8000, () => {
    console.log('port is listening');
  });
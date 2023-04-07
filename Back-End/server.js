import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";
const app = express();


app.use(express.urlencoded({ extended: true }));

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// //static Vedio Folder
// app.use('/Videos', express.static('./Videos'));

// app.use(express.json());
app.use(router);

// testing 
// app.get('/', (req, res) => {
//   res.json({ success: true, message: 'Welcome to backend zone!' });
// });

app.listen(8000, () => {
    console.log('port is listening');
  });
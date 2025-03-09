import express from "express";
import dotenv from "dotenv";
import course from "./routes/course.js";
import user from "./routes/user.js";
import video from "./routes/video.js";
import db from "./models/index.js";
import cors from "cors";
import { logs } from './middlewares/logs.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// allowing cors
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logs)

// routes
app.use("/api/course", course);
app.use("/api/user", user);
app.use("/api/video", video);

// database conection with sequelize
db.sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
  })
  .catch((err) => console.log(err));

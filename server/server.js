import express from "express";
import dotenv from "dotenv";
import courses from "./routes/courses.js";
import users from "./routes/users.js";
import videos from "./routes/videos.js";
import db from "./models/index.js";
import cors from "cors";
import jwtAutherizationToken from './middlewares/jwtAutherization.js'
import userAuthorization from './middlewares/userAuthorization.js'
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

// routes
app.use("/api/courses", courses);
app.use("/api/users", users);
app.use("/api/videos", jwtAutherizationToken, userAuthorization, videos);

// database conection with sequelize
db.sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
  })
  .catch((err) => console.log(err));

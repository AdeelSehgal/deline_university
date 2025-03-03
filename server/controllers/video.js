import { QueryTypes } from 'sequelize';
import db from "../models/index.js";
const { video, sequelize } = db;

// get all videos
const getVideos = async (req, res) => {
  try {

    // sequelize 
    const allVideos = await video.findAll();

    // Raw query
    // const allvideos = await sequelize.query('select * from Videos', {
    //   type: QueryTypes.SELECT,
    // });

    if (allVideos.length === 0) {
      return res.status(404).json({ message: "videos not found" });
    }

    res.status(200).json(allVideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single video
const getSingleVideo = async (req, res) => {
  try {
    const id = req.params.id;

    //sequelize query
    const singleVideo = await video.findAll({ where: { id: id } });

    // raw query
    // const video = await sequelize.query(`select * from Videos where id= ? `, {
    //   type: QueryTypes.SELECT,
    //   replacements: [id]
    // });

    if (singleVideo.length === 0) {
      return res.status(404).json({ message: "video not found" });
    }
    res.status(200).json(singleVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create video
const createVideo = async (req, res) => {
  try {

    console.log(req.body)
    const { title, link, courseId } = req.body;
    if (!title || !link || !courseId) {
      return res.status(404).json({
        message: "title, link and course id is required",
      });
    }

    // Sequelize
    const createdvideo = await video.create({
      title: title,
      link: link,
      courseId: parseInt(courseId)
    });

    // raw query
    // const createdvideo = await sequelize.query('insert into Videos (title, link,createdAt, updatedAt,CourseId) values (?,?,now(),now(),?)', {
    //   type: QueryTypes.INSERT,
    //   replacements: [title, link, parseInt(CourseId)]
    // });

    res.status(201).json({ message: `video is created`, createdvideo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update video
const updatevideo = async (req, res) => {
  try {
    const { title, link, courseId } = req.body;
    const id = req.params.id;
    if (!title || !link || !id || !courseId) {
      return res.status(404).json({
        message: "title, link ,video id and course id is required",
      });
    }

    // Sequelize
    const updatedVideo = await video.update(
      {
        title: title,
        link: link,
        courseId: courseId
      },
      {
        where: { id: id },
      }
    );

    // Raw query
    // const video = await sequelize.query('update Videos set title=?, link=?, CourseId=?, updatedAt=? where id=? ', {
    //   type: QueryTypes.UPDATE,
    //   replacements: [title, link, parseInt(CourseId), 'now()', id]
    // });

    if (updatedVideo == 1) {
      return res
        .status(201)
        .json({ message: `video having id ${id} is updated` });
    }
    res.status(404).json({ message: `video having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete video
const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({ message: "id is must" });
    }

    // sequelize
    const deletedVideo = await video.destroy({ where: { id: id } });


    // Raw query
    // const video = await sequelize.query('delete from Videos where id=? ', {
    //   type: QueryTypes.DELETE,
    //   replacements: [id]
    // });


    if (deletedVideo === 1) {
      return res
        .status(201)
        .json({ message: `video having id ${id} is deleted` });
    }
    res.status(404).json({ message: `video having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get specific course videos
const getCourseVideos = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (!id || id === 0) {
      return res.status(404).json({ message: "course id is required" });
    }

    const allvideos = await video.findAll({ where: { courseId: id } });

    if (allvideos.length === 0) {
      return res.status(404).json({ message: "videos not found" });
    }

    res.status(200).json(allvideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo, getCourseVideos };

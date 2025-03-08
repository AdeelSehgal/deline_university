import { QueryTypes } from 'sequelize';
import db from "../models/index.js";
const { videos, sequelize } = db;

// get all videos
const getVideos = async (req, res) => {
  try {

    // sequelize 
    const allVideos = await videos.findAll();

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
    const singleVideo = await videos.findAll({ where: { id: id } });

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
    const { title, link, course_id } = req.body;

    // Sequelize
    const createdvideo = await videos.create({
      title: title,
      link: link,
      course_id: parseInt(course_id)
    });

    // raw query
    // const createdvideo = await sequelize.query('insert into Videos (title, link,createdAt, updatedAt,course_id) values (?,?,now(),now(),?)', {
    //   type: QueryTypes.INSERT,
    //   replacements: [title, link, parseInt(course_id)]
    // });

    res.status(201).json({ message: `video is created`, createdvideo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update video
const updatevideo = async (req, res) => {
  try {
    const { title, link, course_id } = req.body;
    const id = req.params.id;

    // Sequelize
    const updatedVideo = await videos.update(
      {
        title: title,
        link: link,
        course_id: parseInt(course_id)
      },
      {
        where: { id: id },
      }
    );

    // Raw query
    // const video = await sequelize.query('update Videos set title=?, link=?, course_id=?, updatedAt=? where id=? ', {
    //   type: QueryTypes.UPDATE,
    //   replacements: [title, link, parseInt(course_id), 'now()', id]
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

    // sequelize
    const deletedVideo = await videos.destroy({ where: { id: id } });

    // Raw query
    // const video = await sequelize.query('delete from Videos where id=? ', {
    //   type: QueryTypes.DELETE,
    //   replacements: [id]
    // });


    if (deletedVideo === 1) {
      return res
        .status(200)
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
    const allvideos = await videos.findAll({ where: { course_id: id } });

    if (allvideos.length === 0) {
      return res.status(404).json({ message: "videos not found" });
    }

    res.status(200).json(allvideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo, getCourseVideos };

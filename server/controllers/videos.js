import { QueryTypes } from 'sequelize';
import db from "../models/index.js";
const { Videos, sequelize } = db;

// get all videos
const getVideos = async (req, res) => {
  try {

    // sequelize 
    const allvideos = await Videos.findAll();

    // Raw query
    // const allvideos = await sequelize.query('select * from Videos', {
    //   type: QueryTypes.SELECT,
    // });

    if (allvideos.length === 0) {
      return res.status(404).json({ message: "videos not found" });
    }

    res.status(200).json(allvideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single video
const getSingleVideo = async (req, res) => {
  try {
    const id = req.params.id;

    //sequelize query
    const video = await Videos.findAll({ where: { id: id } });

    // raw query
    // const video = await sequelize.query(`select * from Videos where id= ? `, {
    //   type: QueryTypes.SELECT,
    //   replacements: [id]
    // });

    if (video.length === 0) {
      return res.status(404).json({ message: "video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create video
const createVideo = async (req, res) => {
  try {
    const { title, link, CourseId } = req.body;
    if (!title || !link || !CourseId) {
      return res.status(404).json({
        message: "title and link is required",
      });
    }

    // Sequelize
    const createdvideo = await Videos.create({
      title: title,
      link: link,
      CourseId: parseInt(CourseId)
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
    const { title, link, CourseId } = req.body;
    const id = req.params.id;
    if (!title || !link || !id || !CourseId) {
      return res.status(404).json({
        message: "title, link ,video id and course id is required",
      });
    }

    // Sequelize
    const video = await Videos.update(
      {
        title: title,
        link: link,
        CourseId: CourseId
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

    if (video == 1) {
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
    const video = await Videos.destroy({ where: { id: id } });


    // Raw query
    // const video = await sequelize.query('delete from Videos where id=? ', {
    //   type: QueryTypes.DELETE,
    //   replacements: [id]
    // });


    if (video === 1) {
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

    const allvideos = await Videos.findAll({ where: { CourseId: id } });

    if (allvideos.length === 0) {
      return res.status(404).json({ message: "videos not found" });
    }

    res.status(200).json(allvideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo, getCourseVideos };

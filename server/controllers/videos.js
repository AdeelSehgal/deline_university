import db from "../models/index.js";
const { videos } = db;

// get all videos
const getVideos = async (req, res) => {
  try {
    const allvideos = await videos.findAll();

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
    const video = await videos.findAll({ where: { id: id } });

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
    const { title, link } = req.body;
    if (!title || !link) {
      return res.status(404).json({
        message: "title and link is required",
      });
    }

    const createdvideo = await videos.create({
      title: title,
      link: link,
    });
    res.status(201).json({ message: `video is created`, createdvideo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update video
const updatevideo = async (req, res) => {
  try {
    const { title, link } = req.body;
    const id = req.params.id;
    if (!title || !link || !id) {
      return res.status(404).json({
        message: "title, link and id is required",
      });
    }

    const video = await videos.update(
      {
        title: title,
        link: link,
      },
      {
        where: { id: id },
      }
    );

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

    const video = await videos.destroy({ where: { id: id } });

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

export { getVideos, getSingleVideo, createVideo, updatevideo, deleteVideo };

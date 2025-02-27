import db from "../models/index.js";
const { Courses } = db;

// get all courses
const getCourses = async (req, res) => {
  try {
    const allCourses = await Courses.findAll();
    if (allCourses.length === 0) {
      return res.status(404).json({ message: "courses not found" });
    }
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single course
const getSingleCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Courses.findAll({ where: { id: id } });

    if (course.length === 0) {
      return res.status(404).json({ message: "course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create course
const createCourse = async (req, res) => {
  try {
    const { title, description, image, type } = req.body;
    console.log(req.body)
    if (!title || !description || !image || !type) {
      return res
        .status(404)
        .json({ message: "title, description, image and type is required" });
    }

    const createdCourse = await Courses.create({
      title: title,
      description: description,
      image: image,
      type: type,
    });
    res.status(201).json({ message: `course is created`, createdCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update course
const updateCourse = async (req, res) => {
  try {
    const { title, description, image, type } = req.body;
    const id = req.params.id;
    if (!title || !description || !image || !type || !id) {
      return res.status(404).json({
        message: "title, description, image, id and type is required",
      });
    }

    const course = await Courses.update(
      { title: title, description: description, image: image, type: type },
      {
        where: { id: id },
      }
    );

    if (course == 1) {
      return res
        .status(201)
        .json({ message: `course having id ${id} is updated` });
    }
    res.status(404).json({ message: `course having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete course
const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({ message: "id is must" });
    }
    
    const course = await Courses.destroy({ where: { id: id } });

    if (course === 1) {
      return res
        .status(201)
        .json({ message: `course having id ${id} is deleted` });
    }
    res.status(404).json({ message: `course having id ${id} is not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};

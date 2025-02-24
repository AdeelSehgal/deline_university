import db from '../models/index.js';
const { courses } = db;

// get all courses
const getCourses = async (req, res) => {

    try {
        const allCourses = await courses.findAll()
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get single course
const getSingleCourse = async (req, res) => {

    try {
        const id = req.params.id
        const Course = await courses.findAll({ where: { id: id } })

        if (Course.length === 0) {
            return res.status(404).json({ message: "course not found" })
        }
        res.status(200).json(Course)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// create course
const createCourse = async (req, res) => {

    try {

        const { title, description, image, type } = req.body;
        if (!title || !description || !image || !type) {
            return res.status(404).json({ message: "title, description, imamge and type is must" })
        }

        const Course = await courses.create({ title: title, description: description, image: image, type: type })
        res.status(201).json(Course)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// update course
const updateCourse = async (req, res) => {

    try {

        const { id, title, description, image, type } = req.body;
        if (!title || !description || !image || !type || !id) {
            return res.status(404).json({ message: "title, description, imamge, id and type is must" })
        }

        const Course = await courses.update({ title: title, description: description, image: image, type: type }, {
            where: { id: id, },
        },)

        if (Course == 1) {
            return res.status(201).json({ message: `course having id ${id} is updated` })
        }
        res.status(404).json({ message: `course having id ${id} is not found` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// delete course
const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(404).json({ message: "id and type is must" })
        }
        const Course = await courses.destroy({ where: { id: id } })
        console.log(typeof (Course))

        if (Course == 1) {
            return res.status(201).json({ message: `course having id ${id} is deleted` })
        }
        res.status(404).json({ message: `course having id ${id} is not found` })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse }
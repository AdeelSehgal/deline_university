

let courses = [
    {
        id: 1,
        title: 'Javascript Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto exercitationem odit',
        img: 'assets/images.png',
        type: 'technology'
    },
    {
        id: 2,
        title: 'Angular Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto',
        img: 'assets/angularCourse.jpg',
        type: 'technology'
    },
    {
        id: 3,
        title: 'Laravel Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto exercitationem odit',
        img: 'assets/hq720.jpg',
        type: 'technology'
    },
    {
        id: 4,
        title: 'Power BI',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto exercitationem odit',
        img: 'assets/maxresdefault.jpg',
        type: 'business'
    },
    {
        id: 5,
        title: ' Quick Books',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto exercitationem odit',
        img: 'assets/41.jpg',
        type: 'business',
    },
    {
        id: 6,
        title: 'Figma',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem soluta totam architecto exercitationem odit',
        img: 'assets/Homepage tile .jpg',
        type: 'designing'
    },
]


const getCourses = (req, res) => {
    const limit = parseInt(req.query.limit)

    if (limit) {
        return res.json(courses.slice(0, limit))
    }

    res.json(courses)
}


const getSingleCourse = (req, res) => {
    const courseId = parseInt(req.params.id)
    const course = courses.find((course) => course.id === courseId)
    if (!course) {
        return res.json({ message: `there is not course having id ${courseId}` })
    }

    res.json(course)
}


const createCourse = (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;
    const type = req.body.type;

    const course = {
        id: courses.length + 1,
        title: title,
        description: description,
        img: img,
        type: type
    }

    if (!title || !description || !img || !type) {
        return res.json({ message: `title, description, img and type is nessacary` })
    }

    courses.push(course)

    res.json(courses)
}


const updateCourse = (req, res) => {

    const title = req.body.title
    const description = req.body.description
    const img = req.body.img
    const type = req.body.type
    const id = parseInt(req.params.id)
    const course = courses.find((course) => course.id === id);

    if (!course) {
        return res.json({ message: `there is no course having id ${id}` })
    }

    if (!title || !description || !img || !type) {
        return res.json({ message: `title, description, img and type is nessacary` })
    }

    course.title = title;
    course.description = description;
    course.type = type;
    course.img = img;

    res.json(courses)
}


const deleteCourse = (req, res) => {
    const id = parseInt(req.params.id)
    const course = courses.find((course) => course.id === id);

    if (!course) {
        return res.json({ message: `there is no course having id ${id}` })
    }

    courses = courses.filter((course) => course.id !== id)
    res.json(courses)
}


export { getCourses, getSingleCourse, createCourse, updateCourse, deleteCourse }
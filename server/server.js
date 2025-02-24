import express from 'express'
import dotenv from 'dotenv'
import courses from './routes/courses.js'
import db from './models/index.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000


// allowing cors
app.use(cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))


// middlwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/courses', courses)

// database conection with sequelize
db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
}).catch((err) => console.log(err))

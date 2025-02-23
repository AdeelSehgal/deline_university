import express from 'express'
import dotenv from 'dotenv'
import courses from './routes/courses.js'
import cors from 'cors'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000


// alowing cors
app.use(cors({
    origin: "http://localhost:4200", // Allow only Angular frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))


// middlwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/courses', courses)

app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
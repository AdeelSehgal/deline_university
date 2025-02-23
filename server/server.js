import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

// middlwares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
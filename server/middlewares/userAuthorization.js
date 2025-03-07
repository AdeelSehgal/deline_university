import db from "../models/index.js";
const { users } = db;

export default async (req, res, next) => {

    try {
        const userObject = req.user
        const autherizedUser = await users.findOne({ where: { email: userObject.email} })
        const userType = autherizedUser.dataValues.userType

        if (userType === 'user') {
            return res.status(401).json({ message: 'you are not authorized to perform this task' })
        }
        req.user = userObject
        next()

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}
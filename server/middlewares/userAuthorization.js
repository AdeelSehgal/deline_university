import db from "../models/index.js";
const { Users } = db;

export default async (req, res, next) => {

    try {
        const user = req.user
        const autherizedUser = await Users.findOne({ where: { email: user.email, password: user.password } })
        const userType = autherizedUser.dataValues.userType

        if (userType === 'user') {
            return res.status(401).json({ message: 'you are not authorized to perform this task' })
        }
        req.user = user
        next()

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}
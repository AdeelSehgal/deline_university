import jwt from 'jsonwebtoken'
import client from '../helper/init_redis.js'
export default async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'token is undefined' })
    }

    // checking the token is blacklist or not
    const blackListtokens = await client.get(token)

    if (blackListtokens === 'blackList') {
        return res.status(401).json({ message: 'Unauthenticated.' })
    }

    // verify our token 
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthenticated.' })
        }
        req.user = user // sending data from middleware to another
        next()
    })
}

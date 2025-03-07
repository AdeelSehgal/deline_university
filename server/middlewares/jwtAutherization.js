import jwt from 'jsonwebtoken'
export default (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'token is undefined' })
    }

    // verify our token 
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'token is not valid' })
        }
        req.user = user // sending data from middleware to another
        next()
    })
}
import { body, validationResult } from 'express-validator'

export const userResgisterValidation = [
    body('user_name').notEmpty().withMessage('User name is required').isLength({ min: 3, max: 40 }).withMessage('Minimum length of user_name is 3 and maximum is 40'),
    body('email').isEmail().withMessage('emial should be in this formate dummy@gmail.com').notEmpty().withMessage('email is required').isLength({ min: 3, max: 40 }).withMessage('Minimum length of email is 3 and maximum is 40'),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8, max: 20 }).withMessage('Minimum length of password is 3 and maximum is 40'),
    body('userType').notEmpty().withMessage('User type is required').isLength({ min: 3, max: 30 }).withMessage('Minimum length of userType is 3 and maximum is 30')
]

export const courseValidation = [
    body('title').notEmpty().withMessage('title is required').isLength({ min: 3, max: 20 }).withMessage('Minimum length of title is 3 and maximum is 20'),
    body('description').notEmpty().withMessage('description is required').isLength({ min: 3, max: 255 }).withMessage('Minimum length of description is 3 and maximum is 255'),
    body('image').notEmpty().withMessage('image is required'),
    body('type').notEmpty().withMessage('type is required').isLength({ min: 3, max: 20 }).withMessage('Minimum length of type is 3 and maximum is 20')
]

export const userLoginValidation = [
    body('email').notEmpty().withMessage('email is required').isLength({ min: 3, max: 40 }).withMessage('Minimum length of email is 3 and maximum is 40'),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8, max: 20 }).withMessage('Minimum length of password is 8 and maximum is 20'),
]

export const videosValidation = [
    body('title').notEmpty().withMessage('title is required').isLength({ min: 3, max: 40 }).withMessage('Minimum length of title is 3 and maximum is 40'),
    body('link').notEmpty().withMessage('link is required').isURL().withMessage('link shoud be url'),
    body('course_id').notEmpty().withMessage('course_id is required').isLength({ max: 20 }).withMessage('Minimum length of course_id is  maximum is 40'),
]

export const inputValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next()
}

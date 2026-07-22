import {body} from 'express-validator';
export const createCourseValidator = [
   body("user_id")
        .isInt({ min: 1 })
        .withMessage("User ID must be a positive integer"),

    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 3 })
        .withMessage("Title must be at least 3 characters"),

    body("description")
        .optional()
        .isString(),

    body("price")
        .isFloat({ min: 0 })
        .withMessage("Price must be greater than or equal to 0"),

    body("thumbnail")
        .optional()
        .isString(),
];
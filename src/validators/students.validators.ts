import {body} from 'express-validator';
export const createStudentValidator = [
      body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters"),

    body("email")
        .isEmail()
        .withMessage("Invalid email"),

    body("phone")
        .isLength({ min: 10, max: 11 })
        .withMessage("Phone number is invalid"),

    body("birth")
        .isISO8601()
        .withMessage("Birth must be yyyy-mm-dd"),
];
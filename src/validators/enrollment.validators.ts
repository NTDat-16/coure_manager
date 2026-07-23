import {body} from "express-validator"
export const enrollmentValidator = [
    body("student_id")
        .isInt({ min: 1 })
        .withMessage("Student ID is required"),

    body("course_id")
        .isInt({ min: 1 })
        .withMessage("Course ID is required"),
];
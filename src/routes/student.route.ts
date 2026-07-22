import { Router } from "express";

import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/student.controllers.js";

import { validate } from "../middlewares/validate.middlewares.js";

import {
    createStudentValidator,
} from "../validators/students.validators.js";

const router = Router();

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post(
    "/",
    createStudentValidator,
    validate,
    createStudent
);

router.put(
    "/:id",
    createStudentValidator,
    validate,
    updateStudent
);

router.delete("/:id", deleteStudent);

export default router;
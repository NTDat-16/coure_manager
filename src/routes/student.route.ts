import { Router } from "express";

import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/student.controllers.js";
import { authenticateToken } from "../middlewares/auth.middlewares.js";
import { validate } from "../middlewares/validate.middlewares.js";

import {
    createStudentValidator,
} from "../validators/students.validators.js";

const router = Router();

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post(
    "/",authenticateToken,
    createStudentValidator,
    validate,
    createStudent
);

router.put(
    "/:id",authenticateToken,
    createStudentValidator,
    validate,
    updateStudent
);

router.delete("/:id",authenticateToken, deleteStudent);

export default router;
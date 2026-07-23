import { Request, Response } from "express";
import { enrollStudent } from "../services/enrollment.services.js";

export async function createEnrollment(
    req: Request,
    res: Response
) {
    try {
        const { student_id, course_id } = req.body;

        const enrollment =
            await enrollStudent(
                student_id,
                course_id
            );

        res.status(201).json(enrollment);

    } catch (error: any) {

        res.status(error.status || 500).json({
            message: error.message,
        });

    }
}
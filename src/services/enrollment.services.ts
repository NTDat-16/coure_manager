import * as EnrollmentModel from "../models/enrollment.models.js";

export async function enrollStudent(
    studentId: number,
    courseId: number
) {
    const student =
        await EnrollmentModel.checkStudent(studentId);

    if (!student) {
        throw {
            status: 404,
            message: "Student not found",
        };
    }

    const course =
        await EnrollmentModel.checkCourse(courseId);

    if (!course) {
        throw {
            status: 404,
            message: "Course not found",
        };
    }

    const enrolled =
        await EnrollmentModel.checkEnrollment(
            studentId,
            courseId
        );

    if (enrolled) {
        throw {
            status: 409,
            message: "Student already enrolled",
        };
    }

    return EnrollmentModel.createEnrollment(
        studentId,
        courseId
    );
}
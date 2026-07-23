import pool from "../config/database.js";

export async function checkStudent(studentId: number) {
    const result = await pool.query(
        "SELECT id FROM students WHERE id = $1",
        [studentId]
    );

    return result.rows[0];
}

export async function checkCourse(courseId: number) {
    const result = await pool.query(
        "SELECT id FROM courses WHERE id = $1",
        [courseId]
    );

    return result.rows[0];
}

export async function checkEnrollment(
    studentId: number,
    courseId: number
) {
    const result = await pool.query(
        `
        SELECT *
        FROM enrollments
        WHERE student_id=$1
        AND course_id=$2
        `,
        [studentId, courseId]
    );

    return result.rows[0];
}

export async function createEnrollment(
    studentId: number,
    courseId: number
) {
    const result = await pool.query(
        `
        INSERT INTO enrollments
        (student_id,course_id)
        VALUES($1,$2)
        RETURNING *;
        `,
        [studentId, courseId]
    );

    return result.rows[0];
}
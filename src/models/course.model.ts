import pool from '../config/database.js';

export async function getAllCourses() {
    const result = await pool.query(`
        SELECT *
        FROM courses
        ORDER BY id;
    `);
    return result.rows;
}
export async function getCourseById(id: number) {
    const result = await pool.query(`
        SELECT *
        FROM courses
        WHERE id = $1;
    `, [id]);
    return result.rows[0];
}
export async function createCourse(userId: number, title: string, description: string,price: number,thumbnail: string) {
    const result = await pool.query(`
        INSERT INTO courses (user_id, title, description, price, thumbnail)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `, [userId, title, description, price, thumbnail]);
    return result.rows[0];
}
export async function updateCourse(id: number, title: string, description: string, price: number, thumbnail: string) {
    const result = await pool.query(`
        UPDATE courses
        SET title = $2, description = $3, price = $4, thumbnail = $5
        WHERE id = $1
        RETURNING *;
    `, [id, title, description, price, thumbnail]);
    return result.rows[0];
}
export async function deleteCourse(id: number) {
    const result = await pool.query(`
        DELETE FROM courses
        WHERE id = $1
        RETURNING *;
    `, [id]);
    return result.rows[0];
}


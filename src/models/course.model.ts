import pool from '../config/database.js';

export async function getAllCourses() {
    const result = await pool.query(`
        SELECT *
        FROM courses
        ORDER BY id;
    `);
    return result.rows;
}
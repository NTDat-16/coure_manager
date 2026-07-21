import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
export async function connectDatabase(): Promise<void> {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log("Database connected!");
        console.log(result.rows[0].now);
    } catch (error) {
        console.error("Database connection failed:");
        console.error(error);
        process.exit(1);
    }
}
export default pool;

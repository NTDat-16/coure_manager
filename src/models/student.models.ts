import pool from "../config/database.js";

export async function getAllStudents() {
  const result = await pool.query(
    "SELECT * FROM students ORDER BY id"
  );

  return result.rows;
}

export async function getStudentById(id: number) {
  const result = await pool.query(
    "SELECT * FROM students WHERE id = $1",
    [id]
  );

  return result.rows[0];
}

export async function createStudent(
  name: string,
  email: string,
  phone: string,
  birth: string
) {
  const result = await pool.query(
    `
    INSERT INTO students
    (name,email,phone,birth)
    VALUES($1,$2,$3,$4)
    RETURNING *;
    `,
    [name, email, phone, birth]
  );

  return result.rows[0];
}

export async function updateStudent(
  id: number,
  name: string,
  email: string,
  phone: string,
  birth: string
) {
  const result = await pool.query(
    `
    UPDATE students
    SET
        name=$1,
        email=$2,
        phone=$3,
        birth=$4
    WHERE id=$5
    RETURNING *;
    `,
    [name, email, phone, birth, id]
  );

  return result.rows[0];
}

export async function deleteStudent(id: number) {
  const result = await pool.query(
    "DELETE FROM students WHERE id=$1 RETURNING *",
    [id]
  );

  return result.rows[0];
}
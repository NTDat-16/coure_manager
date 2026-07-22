import { Request, Response } from "express";
import * as StudentService from "../services/student.services.js";

export async function getStudents(
  req: Request,
  res: Response
) {
  const students =
    await StudentService.getStudentsService();

  res.status(200).json(students);
}

export async function getStudentById(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const student =
    await StudentService.getStudentByIdService(id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
}

export async function createStudent(
  req: Request,
  res: Response
) {
  const { name, email, phone, birth } = req.body;

  const student =
    await StudentService.createStudentService(
      name,
      email,
      phone,
      birth
    );

  res.status(201).json(student);
}

export async function updateStudent(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const { name, email, phone, birth } = req.body;

  const student =
    await StudentService.updateStudentService(
      id,
      name,
      email,
      phone,
      birth
    );

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
}

export async function deleteStudent(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const student =
    await StudentService.deleteStudentService(id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json({
    message: "Delete successfully",
  });
}
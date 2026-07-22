import * as StudentModel from "../models/student.models.js";

export const getStudentsService = () =>
  StudentModel.getAllStudents();

export const getStudentByIdService = (id: number) =>
  StudentModel.getStudentById(id);

export const createStudentService = (
  name: string,
  email: string,
  phone: string,
  birth: string
) =>
  StudentModel.createStudent(
    name,
    email,
    phone,
    birth
  );

export const updateStudentService = (
  id: number,
  name: string,
  email: string,
  phone: string,
  birth: string
) =>
  StudentModel.updateStudent(
    id,
    name,
    email,
    phone,
    birth
  );

export const deleteStudentService = (id: number) =>
  StudentModel.deleteStudent(id);
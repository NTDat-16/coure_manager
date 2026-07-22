import { Request, Response } from "express";
import {
  fetchAllCoursesServices,
  fetchCourseByIdServices,
  createNewCourseServices,
  updateCourseServices,
  deleteCourseServices,
} from "../services/course.services.js";
export async function getCourses(req: Request, res: Response) {
  try {
    const courser = await fetchAllCoursesServices();
    res.status(200).json(courser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getCourseById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const course = await fetchCourseByIdServices(id);
  if (!course) {
    res.status(404).json({ message: "Course not found" });
  }
  res.status(200).json(course);
}
export async function createNewCourse(req: Request, res: Response) {
    const { userId, title, description, price, thumbnail } = req.body;
    try {
        const newCourse = await createNewCourseServices(userId, title, description, price, thumbnail);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function updateCourse(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { title, description, price, thumbnail } = req.body;
    try {
        const updatedCourse = await updateCourseServices(id, title, description, price, thumbnail); 
    }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({ message: "Course updated successfully" });
}
export async function deleteCourse(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deletedCourse = await deleteCourseServices(id);
    if (!deletedCourse) {
        res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
}

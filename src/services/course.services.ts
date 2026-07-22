import {createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse} from '../models/course.model.js';
export async function fetchAllCoursesServices() {
    return await getAllCourses();
}
export async function fetchCourseByIdServices(id: number) {
    return await getCourseById(id);
}
export async function createNewCourseServices(userId: number, title: string, description: string, price: number, thumbnail: string) {
    // You can add any additional logic or validation here before creating the course
    return await createCourse(userId, title, description, price, thumbnail);
}
export async function updateCourseServices(id: number, title: string, description: string, price: number, thumbnail: string) {
    return await updateCourse(id, title, description, price, thumbnail);
}
export async function deleteCourseServices(id: number) {
    return await deleteCourse(id);
}
import * as CourseModel from '../models/course.model.js';

export async function fetchAllCoursesServices() {
    return await CourseModel.getAllCourses();
}

export async function fetchCourseByIdServices(id: number) {
    return await CourseModel.getCourseById(id);
}

export async function getCoursesService(
    page: number,
    limit: number,
    keyword: string
) {
    const data = await CourseModel.getCourses(page, limit, keyword);
    const total = await CourseModel.countCourses(keyword);

    return {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        data,
    };
}

export async function createNewCourseServices(userId: number, title: string, description: string, price: number, thumbnail: string) {
    // You can add any additional logic or validation here before creating the course
    return await CourseModel.createCourse(userId, title, description, price, thumbnail);
}

export async function updateCourseServices(id: number, title: string, description: string, price: number, thumbnail: string) {
    return await CourseModel.updateCourse(id, title, description, price, thumbnail);
}

export async function deleteCourseServices(id: number) {
    return await CourseModel.deleteCourse(id);
}
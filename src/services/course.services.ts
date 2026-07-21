import {getAllCourses} from '../models/course.model.js';
export async function fetchAllCourses() {
    return await getAllCourses();
}

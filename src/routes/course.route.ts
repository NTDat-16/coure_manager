import { Router } from 'express';
import { getCourses,getCourseById,createNewCourse,updateCourse,deleteCourse } from '../controllers/course.controllers.js';

const router = Router();
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', createNewCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
export default router;
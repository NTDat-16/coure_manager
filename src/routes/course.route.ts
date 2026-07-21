import { Router } from 'express';
import { getCourses } from '../controllers/course.controllers.js';

const router = Router();
router.get('/', getCourses);

export default router;
import { Router } from "express";

import { createEnrollment } from "../controllers/enrollment.controllers.js";

import { authenticateToken } from "../middlewares/auth.middlewares.js";

import { validate } from "../middlewares/validate.middlewares.js";

import { enrollmentValidator } from "../validators/enrollment.validators.js";

const router = Router();

router.post(
    "/",
    authenticateToken,
    enrollmentValidator,
    validate,
    createEnrollment
);

export default router;
import express ,{Request, Response} from 'express';
import courseRouter from './routes/course.route.js';
import studentRouter from "./routes/student.route.js";
import authRouter from "./routes/auth.route.js";
import enrollmentRouter from "./routes/enrollment.routes.js";

const app = express();
app.get("/", (rep:Request, res: Response) => {
res.send("hello worlf");});
app.use(express.json());
app.use("/auth", authRouter);
app.use('/courses', courseRouter);
app.use('/students', studentRouter);
app.use("/enrollments", enrollmentRouter);
export default app;
import express ,{Request, Response} from 'express';
import courseRouter from './routes/course.route.js';
const app = express();
app.get("/", (rep:Request, res: Response) => {
res.send("hello worlf");});
app.use(express.json());
app.use('/courses', courseRouter);
export default app;
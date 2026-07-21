import express ,{Request, Response} from 'express';
const app = express();
app.get("/", (rep:Request, res: Response) => {
res.send("hello worlf");});
export default app;
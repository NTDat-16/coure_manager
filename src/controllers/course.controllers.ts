import { Request, Response } from 'express';
import {fetchAllCourses} from '../services/course.services.js';
export async function getCourses(
    req: Request,
    res: Response
){
    try{
        const courser = await fetchAllCourses();
        res.status(200).json(courser);
    }
    catch(error){
        res.status(500).json({message: 'Internal server error'});
    }

}
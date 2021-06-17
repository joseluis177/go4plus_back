import {RequestHandler} from 'express';
import * as apiStatusCode from '../repositories/apistatuscode.repository';

export const createStatusCode: RequestHandler = async (req, res) => {
    await apiStatusCode.createStatusCode(req.body)
        .then(data => {
            res.status(data.status.valueOf()).json(data.message);
        })
        .catch(err => {
            res.status(404).json(err); 
        });
};
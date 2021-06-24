import {RequestHandler} from 'express';
import * as objectRepository from '../repositories/parmentity.repository';

export const create: RequestHandler = async (req, res) => {
    await objectRepository.create(req.body)
        .then(data => {
            res.status(data.status.valueOf()).json(data.message);
        })
        .catch(err => {
            res.status(404).json(err); 
        });
};

export const list: RequestHandler = async (req, res) => {
    await objectRepository.list()
        .then(data=> {
            if(data.state){
                res.status(data.status.valueOf()).json(data.response);
            } else {
                res.status(data.status.valueOf()).json(data.message);
            }
        })
        .catch(err => {
            res.status(400).json(err); 
        }
    );
};

export const get: RequestHandler = async (req, res) => {
    await objectRepository.get(req.params.name)
        .then(data=>{
            if(data.state){
                res.status(data.status.valueOf()).json(data.response);
            } else {
                res.status(data.status.valueOf()).json(data.message);
            }        
        })
        .catch(err => {
            res.status(400).json(err); 
        }
    );
};
import {RequestHandler} from 'express';
import * as sysConfigRepository from '../repositories/sysconfig.repository';

export const createSysConfig: RequestHandler = async (req, res) => {
    await sysConfigRepository.createSysConfig(req.body)
        .then(data => {
            res.status(data.status.valueOf()).json(data.message);
        })
        .catch(err => {
            res.status(400).json(err); 
        }
    );
};

export const getSysConfigByName: RequestHandler = async (req, res) => {
    await sysConfigRepository.getSysConfigByName(req.params.name)
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

export const listSysConfig: RequestHandler = async (req, res) => {
    await sysConfigRepository.listSysConfig()
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

export const deleteSysConfigByName: RequestHandler = async (req, res) => {
    await sysConfigRepository.deleteSysConfig(req.params.name)
        .then(data=>{
            res.status(data.status.valueOf()).json(data.message);        
        })
        .catch(err => {
            res.status(400).json(err); 
        }
    );
};

export const updateSysConfig: RequestHandler = async (req, res) => {
    await sysConfigRepository.updateSysConfig(req.params.name, req.body)
        .then(data=>{
            res.status(data.status.valueOf()).json(data.message);        
        })
        .catch(err => {
            res.status(400).json(err); 
        }
    );
};
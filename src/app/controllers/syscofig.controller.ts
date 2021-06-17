import {RequestHandler} from 'express';
import * as sysConfigRepository from '../repositories/sysconfig.repository';

export const createSysConfig: RequestHandler = async (req, res) => {
    await sysConfigRepository.createSysConfig(req.body)
        .then(data => {
            res.status(data.status.valueOf()).json(data.message);
        })
        .catch(err => {
            res.status(400).json(err); 
        });

};

export const getSysConfigByName: RequestHandler = async (req, res) => {
    await sysConfigRepository.getSysConfigByName(req.params.name).then(data=>{
        if(data) {
            res.status(200).json(data);        
        } else {
            res.status(204).json("No data");
        }
    })
};

export const listSysConfig: RequestHandler = async (req, res) => {
    res.status(200).json(await sysConfigRepository.listSysConfig());
};

export const updateSysConfig: RequestHandler = (req, res) => {
    res.json('Recuperando configuración del sistema')
};
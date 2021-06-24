import objectModel from '../models/parmentity.model';
import { IParmEntity } from '../view/parmentity.view';
import { IApiStatusCode } from '../view/apistatuscode.view';
import { getStatusCode } from './apistatuscode.repository';

const objPrefix = 'pre';

export async function create(oCreate: IParmEntity): Promise<IApiStatusCode> {
    var status;
    try {
        const oCreated = new objectModel(oCreate);
        await oCreated.save();
        status = objPrefix + '0000';
    } catch (error) {
        status = objPrefix + '0001';
    }
    return getStatusCode(status, null);
}

export async function list(): Promise<IApiStatusCode> {
    var status;
    const oListed = await objectModel.find();
    if(oListed) { status= objPrefix + '0002'}
    else {status= objPrefix + '0003'}
    return getStatusCode(status, oListed);
}

export async function get(value: String): Promise<IApiStatusCode> {
    var status;
    const oObtained = await objectModel.findOne({name: value.trim()});
    if(oObtained) { status = objPrefix + '0002'; }
    else { status=objPrefix + '0003'; }
    return getStatusCode(status, oObtained);
}
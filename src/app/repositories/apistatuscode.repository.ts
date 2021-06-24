import objectModel from '../models/apistatuscode.model';
import {IApiStatusCode} from '../view/apistatuscode.view';
const objPrefix = 'api';
export async function createStatusCode(statusCode: IApiStatusCode): Promise<IApiStatusCode> {
    var status;
    try {
        const oapiStatusCode = new objectModel(statusCode);
        await oapiStatusCode.save();
        status = 'api0000';    
    } catch (error) {
        status = 'api0001';
    }
    return await getStatusCode(status, null);
}

export async function getStatusCode(code: String, response: any): Promise<IApiStatusCode> {
    var oapiStatusCode = await objectModel.findOne({code: code});
    oapiStatusCode.response = response;
    return oapiStatusCode;
}

export async function list(): Promise<IApiStatusCode> {
    var status;
    const oListed = await objectModel.find();
    if(oListed) { status= objPrefix + '0002'}
    else {status= objPrefix + '0003'}
    return getStatusCode(status, oListed);
}
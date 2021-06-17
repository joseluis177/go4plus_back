import apiStatusCode from '../models/apistatuscode.model';
import {IApiStatusCode} from '../view/apistatuscode.view';

export async function createStatusCode(statusCode: IApiStatusCode): Promise<IApiStatusCode> {
    var status;
    try {
        const oapiStatusCode = new apiStatusCode(statusCode);
        await oapiStatusCode.save();
        status = 'api0000';    
    } catch (error) {
        status = 'api0001';
    }
    return await getStatusCode(status, null);
}

export async function getStatusCode(code: String, response: any): Promise<IApiStatusCode> {
    var oapiStatusCode = await apiStatusCode.findOne({code: code});
    oapiStatusCode.response = response;
    return oapiStatusCode;
}
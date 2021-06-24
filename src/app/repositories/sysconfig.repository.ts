import objectModel from '../models/sysconfig.model';
import { ISysConfig } from '../view/sysconfig.view';
import { IApiStatusCode } from '../view/apistatuscode.view';
import { getStatusCode } from '../repositories/apistatuscode.repository';

const objPrefix = 'sys';

export async function create(oCreate: ISysConfig): Promise<IApiStatusCode> {
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

export async function get(value: String): Promise<IApiStatusCode> {
    var status;
    const oObtained = await objectModel.findOne({name: value.trim()});
    if(oObtained) { status = objPrefix + '0002'; }
    else { status=objPrefix + '0003'; }
    return getStatusCode(status, oObtained);
}

export async function list(): Promise<IApiStatusCode> {
    var status;
    const oObtained = await objectModel.find();
    if(oObtained) { status = objPrefix + '0002'; }
    else { status=objPrefix + '0003'; }
    return getStatusCode(status, oObtained);
}

export async function remove(value: String): Promise<IApiStatusCode> {
    var status;
    const oRemoved = await objectModel.findOneAndDelete({name: value.trim()})
    if(oRemoved) { status = '0004'; } 
    else { status = '0005'; }
    return getStatusCode(objPrefix + status, null);
}

export async function update(value: String, oUpdate: ISysConfig): Promise<IApiStatusCode> {
    var status = '';
    await remove(value).then(data=>{
        if(data.state) {
            const oUpdated = new objectModel(oUpdate);
            oUpdated.save();
            status = '0006';
        } else {
            status = '0007';
        }
    })
    return getStatusCode(objPrefix + status, null);
}
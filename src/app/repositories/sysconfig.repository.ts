import sysConfig from '../models/sysconfig.model';
import { ISysConfig } from '../view/sysconfig.view';
import { IApiStatusCode } from '../view/apistatuscode.view';
import { getStatusCode } from '../repositories/apistatuscode.repository';

export async function createSysConfig(sysconfig: ISysConfig): Promise<IApiStatusCode> {
    var status;
    try {
        const oSysConfig = new sysConfig(sysconfig);
        await oSysConfig.save();
        status = 'sys0000';
    } catch (error) {
        status = 'sys0001';
    }
    return getStatusCode(status, null);
}

export async function getSysConfigByName(name: String): Promise<IApiStatusCode> {
    var status;
    const oSysConfig = await sysConfig.findOne({name: name.trim()});
    if(oSysConfig) { status='sys0002'}
    else {status='sys0003'}
    return getStatusCode(status, oSysConfig);
    
}

export async function listSysConfig(): Promise<Array<ISysConfig>> {
    return await sysConfig.find();
}
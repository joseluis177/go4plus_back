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

export async function listSysConfig(): Promise<IApiStatusCode> {
    var status;
    const oSysConfig = await sysConfig.find();
    if(oSysConfig) { status='sys0002'}
    else {status='sys0003'}
    return getStatusCode(status, oSysConfig);
}

export async function deleteSysConfig(name: String): Promise<IApiStatusCode> {
    const oSysConfig = await sysConfig.findOneAndDelete({name: name.trim()})
    if(oSysConfig) {
        return getStatusCode('sys0004', null);
    } else {
        return getStatusCode('sys0005', null);
    }

}

export async function updateSysConfig(name: String, sysconfig: ISysConfig): Promise<IApiStatusCode> {
    var status = '';
    await deleteSysConfig(name).then(data=>{
        if(data.state) {
            const oSysConfig = new sysConfig(sysconfig);
            oSysConfig.save();
            status = 'sys0006';
        } else {
            status = 'sys0007';
        }
    })
    return getStatusCode(status, null);
}
import { ApplicationData } from '@api/bff/models';
import { BaseMapper } from './base.mapper';

export class BasicInfoMapper extends BaseMapper {

    constructor(applicationData: ApplicationData) {
        super(applicationData);
    }
    mapObject(formGroup: any): ApplicationData {
        this._appData.planId = '123';
        return this._appData;
    }
}

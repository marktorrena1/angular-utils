import { ApplicationData } from '@api/bff/models';
import { BaseMapper } from './base.mapper';

export class PersonalInfoMapper extends BaseMapper {
    constructor(applicationData: ApplicationData) {
        super(applicationData);
    }
    mapObject(formGroup: any) {
        this._appData.planName = 'MARK JEO';
        return this._appData;
    }
}

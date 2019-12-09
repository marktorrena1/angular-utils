import { ApplicationData } from '@api/bff/models';

export class PersonalInfoMapper implements BaseMapper {
    private _appData: ApplicationData;
    constructor(applicationData: ApplicationData) {
        this._appData = applicationData;
    }
    mapObject(formGroup: any) {
        this._appData.planName = 'MARK JEO';
        return this._appData;
    }

}

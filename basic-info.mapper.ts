import { ApplicationData } from '@api/bff/models';
import { FormGroup } from '@angular/forms';

export class BasicInfoMapper implements BaseMapper {
    private _appData: ApplicationData;
    constructor(applicationData: ApplicationData) {
        this._appData = applicationData;
    }
    mapObject(formGroup: FormGroup): ApplicationData {
        this._appData.planId = '123';
        return this._appData;
    }
}

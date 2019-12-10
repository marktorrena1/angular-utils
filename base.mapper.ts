import { ApplicationData } from '@api/bff/models';

export abstract class BaseMapper {
    _appData: ApplicationData;
    constructor(applicationData: ApplicationData) {
        this._appData = applicationData;
    }
    abstract mapObject(formGroup: any): any;
}

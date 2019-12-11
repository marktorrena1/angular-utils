import { FormCacheService } from '@ui-form-services/form-cache/form-cache.service';
import { BaseMapper } from '../base.mapper';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseBuilder<T> {
    private rawData: T;
    private mapper: BaseMapper;
    private gChecker: ModuleChecker;

    constructor(private formCacheService: FormCacheService) {
    }

    setData(rawData : T) {
        this.rawData = rawData;
        return this;
    }

    setChecker(checker: ModuleChecker) {
        this.gChecker = checker;
        return this;
    }

    mapObject(formGroupName: string) {
        this.mapper = null;
        this.mapper = this.gChecker.classChecker(formGroupName, this.rawData);
        // AOE GROUP CLASS
        // if (formGroupName === 'BASIC-INFO') {
        //     this.mapper = new BasicInfoMapper(this.rawData);
        // }
        // if (formGroupName === 'PERSONAL-INFO') {
        //     this.mapper = new PersonalInfoMapper(this.rawData);
        // }

        // HR GROUP CLASS

        // this.applicationData = this.mapper.mapObject(this.formCacheService.getFormGroup(formGroupName));
        this.rawData = this.mapper.mapObject({ });
        return this;
    }

    getUpdatedAppData() {
        return this.rawData;
    }

}


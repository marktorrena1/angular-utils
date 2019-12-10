import { ApplicationData } from '@api/bff/models';
import { FormGroup } from '@angular/forms';
import { FormCacheService } from '@ui-form-services/form-cache/form-cache.service';
import { BasicInfoMapper } from './basic-info.mapper';
import { PersonalInfoMapper } from './personal-info.mapper';
import { Injectable } from '@angular/core';
import { BaseMapper } from './base.mapper';

@Injectable({
    providedIn: 'root'
})
export class AgentOverviewBuilder {
    constructor(private formCacheService: FormCacheService) {

    }
    private applicationData: ApplicationData;
    private mapper: BaseMapper;

    setAppData(appData : ApplicationData) {
        this.applicationData = appData;
    }

    mapObject(formGroupName: string) {
        this.mapper = null;
        if (formGroupName === 'BASIC-INFO') {
            this.mapper = new BasicInfoMapper(this.applicationData);
        }
        if (formGroupName === 'PERSONAL-INFO') {
            this.mapper = new PersonalInfoMapper(this.applicationData);
        }
        // this.applicationData = this.mapper.mapObject(this.formCacheService.getFormGroup(formGroupName));
        this.applicationData = this.mapper.mapObject({ });
    }

    getUpdatedAppData() {
        return this.applicationData;
    }
}

import { BasicInfoMapper } from '../basic-info.mapper';
import { PersonalInfoMapper } from '../personal-info.mapper';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HandlerReportChecker implements ModuleChecker {
    classChecker(formGroupName: string, rawData: any) {
        if (formGroupName === 'HR-1') {
            return new BasicInfoMapper(rawData);
        }
        if (formGroupName === 'HR-2') {
            return new PersonalInfoMapper(rawData);
        }
    }
}

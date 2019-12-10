import { BasicInfoMapper } from '../basic-info.mapper';
import { PersonalInfoMapper } from '../personal-info.mapper';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AgentOverViewChecker implements ModuleChecker {
    classChecker(formGroupName: string, rawData: any) {
         if (formGroupName === 'BASIC-INFO') {
            return new BasicInfoMapper(rawData);
        }
        if (formGroupName === 'PERSONAL-INFO') {
            return new PersonalInfoMapper(rawData);
        }
    }
}

import { AgentOverviewBuilder } from './aoe-builder';
import { ApplicationData } from '@api/bff/models';
import { Injectable } from '@angular/core';
import { AgentOverViewChecker } from './mapperV2/aoe-checker';
import { BaseBuilder } from './mapperV2/base.builder';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor(private aoeBuilder: AgentOverviewBuilder,
        private bBuilder: BaseBuilder<ApplicationData>) {
        this.onInit();
    }
    onInit() {
        debugger;
        const appData: ApplicationData = { repApplicationNo : '1'};
        // this.aoeBuilder.setAppData(appData);
        // this.aoeBuilder.mapObject('BASIC-INFO');
        // this.aoeBuilder.mapObject('PERSONAL-INFO');
        // console.log(this.aoeBuilder.getUpdatedAppData());

        // HR - AgentReport, HRChecker
        this.bBuilder.setData(appData);
        this.bBuilder.setChecker(new AgentOverViewChecker());
        this.bBuilder.mapObject('BASIC-INFO');
        this.bBuilder.mapObject('PERSONAL-INFO');
        console.log(this.bBuilder.getUpdatedAppData());

    }

}

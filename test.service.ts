import { AgentOverviewBuilder } from './aoe-builder';
import { ApplicationData } from '@api/bff/models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor(private aoeBuilder: AgentOverviewBuilder) {
        this.onInit();
    }
    onInit() {
        const appData: ApplicationData = { repApplicationNo : '1'};
        this.aoeBuilder.setAppData(appData);
        this.aoeBuilder.mapObject('BASIC-INFO');
        this.aoeBuilder.mapObject('PERSONAL-INFO');
        console.log(this.aoeBuilder.getUpdatedAppData());
    }

}

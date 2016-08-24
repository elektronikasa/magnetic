import {Component} from 'angular2/core'
import {Modal} from "./common/modal.component";
import {TaskItemComponent} from "./task-item.component";

@Component({
    selector: 'event-demo-app',
    directives: [Modal, TaskItemComponent],
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
    owners = ['bob','mike','bev','ira','doris'];
    heading = "New Task";
    firstTaskItem= {
        owners: ['bob','mike','bev','ivor','doris'],
        statusTypes: ['good','normal','bad','n/a','fail'],
        id: 1,
        name: "My first task",
        description: "This is a description",
        notify: true,
        owner: 'mike',
        owner1: 'bev',
        watchers: ['mike kar','bev fen','ira fen','doris fen','gab kar','zoe kar'],
        billRateTypes: ['Dev - Unplanned','Dev - Planned','Proj - Unplanned','Proj - Planned','Meeting - Unplanned'],
        opertunity: 'go where no man has been before',
        startDate:1294166565384,
        endDate:1294166565384,
        estEffortHrs:1,
        estEffortMin:2,
        trEffortHrs:3,
        trEffortMin:4,
        status:'good',
        billable:true,
        billRate:'Dev - Planned',
        tags:'no idea what this is!'
    };
}
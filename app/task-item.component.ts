import {Component, Input} from 'angular2/core';

@Component({
    selector: 'task-item',
    templateUrl: 'app/task-item.component.html',
    styleUrls: ['app/task-item.component.css']
})
export class TaskItemComponent {
    @Input('taskItemToWatch') taskItem;
    
    onDelete() {
        console.log('deleted');
    }
}
System.register(['angular2/core', "./common/modal.component", "./task-item.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, modal_component_1, task_item_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            },
            function (task_item_component_1_1) {
                task_item_component_1 = task_item_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.owners = ['bob', 'mike', 'bev', 'ira', 'doris'];
                    this.heading = "New Task";
                    this.firstTaskItem = {
                        owners: ['bob', 'mike', 'bev', 'ivor', 'doris'],
                        statusTypes: ['good', 'normal', 'bad', 'n/a', 'fail'],
                        id: 1,
                        name: "My first task",
                        description: "This is a description",
                        notify: true,
                        owner: 'mike',
                        owner1: 'bev',
                        watchers: ['mike kar', 'bev fen', 'ira fen', 'doris fen', 'gab kar', 'zoe kar'],
                        billRateTypes: ['Dev - Unplanned', 'Dev - Planned', 'Proj - Unplanned', 'Proj - Planned', 'Meeting - Unplanned'],
                        opertunity: 'go where no man has been before',
                        startDate: 1294166565384,
                        endDate: 1294166565384,
                        estEffortHrs: 1,
                        estEffortMin: 2,
                        trEffortHrs: 3,
                        trEffortMin: 4,
                        status: 'good',
                        billable: true,
                        billRate: 'Dev - Planned',
                        tags: 'no idea what this is!'
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'event-demo-app',
                        directives: [modal_component_1.Modal, task_item_component_1.TaskItemComponent],
                        templateUrl: './app/app.component.html',
                        styleUrls: ['./app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
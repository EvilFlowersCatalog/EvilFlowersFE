import { Component } from '@angular/core';

@Component({
    selector: 'ef-loading',
    template: `<mat-progress-bar style="padding: 0 10px; width: 90vw" mode="indeterminate"></mat-progress-bar>`,
})
export class LoadingComponent {}

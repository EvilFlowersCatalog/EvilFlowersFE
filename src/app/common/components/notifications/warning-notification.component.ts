import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'warning-notification',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <mat-icon style="color: #ffc107; vertical-align: bottom;">
        warning
      </mat-icon>
      <i
        style="padding: 0 10px; text-align: center;"
        [innerHtml]="data.message"
      >
        {{ data.message }}
      </i>
      <mat-icon
        style="vertical-align: bottom; cursor: pointer;"
        (click)="dismiss()"
      >
        highlight_off
      </mat-icon>
    </div>
  `,
})
export class WarningNotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  dismiss() {
    this.data.preClose();
  }
}

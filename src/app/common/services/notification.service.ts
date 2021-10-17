import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorNotificationComponent } from '../components/notifications/error-notification.component';
import { InfoNotificationComponent } from '../components/notifications/info-notification.component';
import { SuccessNotificationComponent } from '../components/notifications/success-notification.component';
import { WarningNotificationComponent } from '../components/notifications/warning-notification.component';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(private readonly snackBar: MatSnackBar) {}

    success(message: string) {
        const snackBar = this.snackBar.openFromComponent(SuccessNotificationComponent, {
            data: {
                message,
                preClose: () => {
                    snackBar.dismiss();
                },
            },
            duration: 5000,
        });
    }

    error(message: string) {
        const snackBar = this.snackBar.openFromComponent(ErrorNotificationComponent, {
            data: {
                message,
                preClose: () => {
                    snackBar.dismiss();
                },
            },
            duration: 5000,
        });
    }

    info(message: string) {
        const snackBar = this.snackBar.openFromComponent(InfoNotificationComponent, {
            data: {
                message,
                preClose: () => {
                    snackBar.dismiss();
                },
            },
            duration: 5000,
        });
    }

    warning(message: string) {
        const snackBar = this.snackBar.openFromComponent(WarningNotificationComponent, {
            data: {
                message,
                preClose: () => {
                    snackBar.dismiss();
                },
            },
            duration: 5000,
        });
    }
}

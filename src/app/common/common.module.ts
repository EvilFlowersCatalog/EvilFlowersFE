import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCAL_STORAGE_TOKEN } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { LoadingComponent } from './components/loading.component';
import { ErrorNotificationComponent } from './components/notifications/error-notification.component';
import { InfoNotificationComponent } from './components/notifications/info-notification.component';
import { SuccessNotificationComponent } from './components/notifications/success-notification.component';
import { WarningNotificationComponent } from './components/notifications/warning-notification.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        LoadingComponent,
        SuccessNotificationComponent,
        ErrorNotificationComponent,
        InfoNotificationComponent,
        WarningNotificationComponent,
        NotFoundComponent,
        NavbarComponent,
    ],
    imports: [CommonModule, MaterialModule, RouterModule, TranslocoRootModule, FormsModule],
    exports: [LoadingComponent, NotFoundComponent, NavbarComponent],
    providers: [{ provide: LOCAL_STORAGE_TOKEN, useValue: localStorage }],
})
export class CommonAppModule {}

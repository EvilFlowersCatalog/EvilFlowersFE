import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AUTH_ROUTES } from './routing/auth.routing';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(AUTH_ROUTES), TranslocoRootModule],
})
export class AuthModule {}

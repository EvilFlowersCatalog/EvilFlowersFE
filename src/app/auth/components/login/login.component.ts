import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { throwError } from 'rxjs';
import { take, tap, catchError } from 'rxjs/operators';
import { NotificationService } from 'src/app/common/services/notification.service';
import { StateService } from 'src/app/common/services/state.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'ef-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    username: string;
    password: string;
    hidePassword: boolean = true;

    constructor(
        private readonly authService: AuthService,
        private readonly notificationService: NotificationService,
        private readonly stateService: StateService,
        private readonly translocoService: TranslocoService
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    ngOnInit(): void {}

    submit() {
        this.authService
            .login(this.loginForm.value)
            .pipe(
                take(1),
                tap(res => {
                    this.stateService.patchState({ accessToken: res.response.access_token, refreshToken: res.response.refresh_token });
                    // TODO navigate
                    const successMessage = this.translocoService.translate('login.loginSuccessMessage');
                    this.notificationService.success(successMessage);
                }),
                catchError(err => {
                    console.log(err);
                    const errorMessage = this.translocoService.translate('login.loginErrorMessage');
                    this.notificationService.error(errorMessage);
                    return throwError(err);
                })
            )
            .subscribe(res => console.log(res));
    }
}

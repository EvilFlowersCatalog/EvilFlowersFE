import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { DisposableComponent } from './common/components/disposable.component';
import { TranslocoService } from '@ngneat/transloco';
import { StateService } from './common/services/state.service';
import { LoadingService } from './common/services/loading.service';
import { State } from './common/types/state.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DisposableComponent {
    sidenavState: boolean;
    windowStoreChange$: Observable<any>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private readonly stateService: StateService,
        private readonly langService: TranslocoService,
        private readonly loadingService: LoadingService
    ) {
        super();
    }

    ngOnInit() {
        this.stateService
            .getState$()
            .pipe(takeUntil(this.destroySignal$))
            .subscribe((data: State) => {
                this.sidenavState = data.sidenav;
                this.langService.setActiveLang(data.lang);
            });
        this.loadingService.loadingStatus$
            .pipe(
                tap(status => {
                    if (status) {
                        this.loadingService.onShowLoading();
                    } else {
                        this.loadingService.onHideLoading();
                    }
                }),
                takeUntil(this.destroySignal$)
            )
            .subscribe();
        this.initWindowStorageListener();
    }

    initWindowStorageListener() {
        this.windowStoreChange$ = fromEvent(window, 'storage').pipe(takeUntil(this.destroySignal$), debounceTime(500));
        this.windowStoreChange$.subscribe((state: StorageEvent) => {
            if (document.hasFocus()) {
                return;
            }
            this.stateService.setState(JSON.parse(state.newValue));
        });
    }
}

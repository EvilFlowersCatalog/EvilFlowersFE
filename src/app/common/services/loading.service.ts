import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { LoadingComponent } from '../components/loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    activeOverlayRef: OverlayRef | undefined;
    loadingStatus$ = new BehaviorSubject<boolean>(false);

    constructor(private readonly scrollStrategy: ScrollStrategyOptions, public overlay: Overlay) {}

    private showOverlay() {
        const position = this.overlay.position().global().centerHorizontally().centerVertically();
        const overlayConfig = new OverlayConfig({
            positionStrategy: position,
            scrollStrategy: this.scrollStrategy.block(),
            hasBackdrop: true,
        });
        const overlayRef = this.overlay.create(overlayConfig);
        const component = new ComponentPortal(LoadingComponent);
        overlayRef.attach(component);
        return overlayRef;
    }

    onShowLoading() {
        if (!this.activeOverlayRef) {
            this.activeOverlayRef = this.showOverlay();
        }
    }

    onHideLoading() {
        if (this.activeOverlayRef) {
            this.activeOverlayRef?.dispose();
            this.activeOverlayRef = undefined;
        }
    }

    showLoading() {
        this.loadingStatus$.next(true);
    }

    hideLoading() {
        this.loadingStatus$.next(false);
    }
}

import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class DisposableComponent implements OnDestroy {
  destroySignal$ = new Subject();

  ngOnDestroy() {
    this.destroySignal$.next();
    this.destroySignal$.complete();
  }
}

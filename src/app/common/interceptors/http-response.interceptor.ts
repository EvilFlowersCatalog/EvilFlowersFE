import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    constructor(private readonly loadingService: LoadingService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((e: HttpEvent<any>) => {
                if (e instanceof HttpResponse && e.body?.result) {
                    e = e.clone({ body: e.body?.result });
                }
                return e;
            }),
            tap(e => {
                if (e instanceof HttpResponse) {
                    this.loadingService.hideLoading();
                }
            })
        );
    }
}

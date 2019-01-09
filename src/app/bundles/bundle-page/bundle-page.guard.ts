import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../shared/bundle.interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { BundleService } from '../shared/bundle.service';
import { LoadBundleDocumentsSuccess } from './bundle-page.actions';


@Injectable()
export class BundlePageGuard implements CanActivate {

  constructor(private store: Store<State>,
              private service: BundleService) {
  }

  hasBundleDocumentsInStore(): Observable<boolean> {
    return this.store
      .select('documents')
      .pipe(
        map(documents => documents && documents.length > 0),
        take(1)
      );
  }

  populateStoreWithBundleDocuments(): Observable<boolean> {
    return this.service
      .getBundleDocuments()
      .pipe(
        map(documents => new LoadBundleDocumentsSuccess(documents)),
        tap(action => this.store.dispatch(action)),
        map(Boolean),
        catchError(() => {
          return of(false);
        })
      );
  }

  canActivate(): Observable<boolean> {
    return this.hasBundleDocumentsInStore()
      .pipe(
        switchMap(inStore => {
          if (inStore) {
            return of(inStore);
          }
          return this.populateStoreWithBundleDocuments();
        })
      );
  }
}

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { State } from "../shared/bundle.interfaces";
import { BundleService } from "../shared/bundle.service";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import {
  ApiError,
  SAVE_BUNDLE_DOCUMENTS,
  SaveBundleDocuments,
  SaveBundleDocumentsSuccess
} from "./bundle-page.actions";

@Injectable()
export class ActionPlanEffects {

  @Effect()
  saveBundleDocument$: Observable<Action> = this.actions$
    .pipe(
      ofType<SaveBundleDocuments>(SAVE_BUNDLE_DOCUMENTS),
      withLatestFrom(this.store.select(state => state.documents)),
      switchMap(([action,]) => this.service
        .saveBundleDocuments(action.payload)
        .pipe(
          map(response => new SaveBundleDocumentsSuccess(response)),
          catchError(error => of(new ApiError(error)))
        )
      )
    );

  constructor(private actions$: Actions,
              private store: Store<State>,
              private service: BundleService) {
  }
}

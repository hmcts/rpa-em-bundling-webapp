import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { State } from "../shared/bundle.interfaces";
import { BundleService } from "../shared/bundle.service";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import {
  ApiError,
  STITCH_BUNDLE,
  StitchBundle,
  StitchBundleSuccess
} from "./bundle-page.actions";

@Injectable()
export class BundlePageEffects {

  @Effect()
  stitchBundle$: Observable<Action> = this.actions$
    .pipe(
      ofType<StitchBundle>(STITCH_BUNDLE),
      switchMap(action => this.service
        .stitchBundle(action.payload)
        .pipe(
          map(response => new StitchBundleSuccess(response)),
          catchError(error => of(new ApiError(error)))
        )
      )
    );

  constructor(private actions$: Actions,
              private store: Store<State>,
              private service: BundleService) {
  }
}

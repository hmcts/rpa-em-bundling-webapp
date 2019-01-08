import { Action } from '@ngrx/store';
import { BundleDocument } from "../shared/bundle.interfaces";

export const LOAD_BUNDLE_DOCUMENTS_SUCCESS = '[c2i] load bundle page actions';

export class LoadBundleDocumentsSuccess implements Action {

  readonly type = LOAD_BUNDLE_DOCUMENTS_SUCCESS;

  constructor(public payload: BundleDocument[]) {
  }
}

export const STITCH_BUNDLE = '[c2i] stitch bundle';

export class StitchBundle implements Action {

  readonly type = STITCH_BUNDLE;

  constructor(public payload: BundleDocument[]) {
  }
}

export const STITCH_BUNDLE_SUCCESS = '[c2i] stitch bundle success';

export class StitchBundleSuccess implements Action {

  readonly type = STITCH_BUNDLE_SUCCESS;

  constructor(public payload: string) {
  }
}

export const API_ERROR = '[c2i] Api error';

export class ApiError implements Action {
  readonly type = API_ERROR;

  constructor(public readonly response: any) {
  }
}

export type BundlePageAction = LoadBundleDocumentsSuccess | StitchBundle | StitchBundleSuccess;

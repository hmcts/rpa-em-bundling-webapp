import { Action } from '@ngrx/store';
import { BundleDocument } from "../shared/bundle.interfaces";

export const LOAD_BUNDLE_DOCUMENTS_SUCCESS = '[c2i] load bundle page actions';

export class LoadBundleDocumentsSuccess implements Action {

  readonly type = LOAD_BUNDLE_DOCUMENTS_SUCCESS;

  constructor(public payload: BundleDocument[]) {
  }
}

export const SAVE_BUNDLE_DOCUMENTS = '[c2i] save bundle documents';

export class SaveBundleDocuments implements Action {

  readonly type = SAVE_BUNDLE_DOCUMENTS;

  constructor(public payload: BundleDocument[]) {
  }
}

export const SAVE_BUNDLE_DOCUMENTS_SUCCESS = '[c2i] save bundle documents success';

export class SaveBundleDocumentsSuccess implements Action {

  readonly type = SAVE_BUNDLE_DOCUMENTS_SUCCESS;

  constructor(public payload: BundleDocument[]) {
  }
}

export const API_ERROR = '[c2i] Api error';

export class ApiError implements Action {
  readonly type = API_ERROR;

  constructor(public readonly response: any) {
  }
}

export type BundlePageAction = LoadBundleDocumentsSuccess | SaveBundleDocuments | SaveBundleDocumentsSuccess;

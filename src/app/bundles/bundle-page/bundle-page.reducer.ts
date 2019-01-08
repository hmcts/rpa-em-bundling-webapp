import * as BundlePageActions from "./bundle-page.actions";
import { BundlePageAction } from "./bundle-page.actions";
import { State } from "../shared/bundle.interfaces";

const initialState: State = {
  documents: [],
  stitchedPdf: ''
};

export const bundleReducer = (state: State = initialState, action: BundlePageAction): State => {

  switch (action.type) {
    case BundlePageActions.LOAD_BUNDLE_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: action.payload
      };
    case BundlePageActions.STITCH_BUNDLE_SUCCESS:
      return {
        ...state,
        stitchedPdf: action.payload
      };
    default:
      return state;
  }
};

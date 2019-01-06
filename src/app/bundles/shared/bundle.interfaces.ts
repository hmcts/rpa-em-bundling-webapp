export class Bundle {
  id: number;
  name: string;
  description: string;
  bundle_documents: BundleDocument[];
}

export interface BundleDocument {
  id: number;
  order: number;
  name: string;
}

export class CaseDocument {
  id: number;
  name: string;
  DM_URI: string;
  folder: string;
}

export interface State {
  documents: BundleDocument[];
}

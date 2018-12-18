import { CaseDocument } from './casedocument';

export class Bundle {
    id: number;
    name: string;
    description: string;
    bundle_documents: CaseDocument[];
  }

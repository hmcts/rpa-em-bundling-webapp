import { CaseDocument } from "../../case-documents/shared/casedocument"; // TODO Change this

export class Bundle {
    id: number;
    name: string;
    description: string;
    bundle_documents: CaseDocument[];
  }

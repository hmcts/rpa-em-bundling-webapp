import { Injectable } from '@angular/core';
import { BundleDocument } from "./bundle.interfaces";
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class BundleService {

  backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  getBundleDocuments(): Observable<BundleDocument[]> {
    return this.http.get<BundleDocument[]>(`${this.backendUrl}/bundle-documents`);
  }

  saveBundleDocuments(documents: BundleDocument[]): Observable<BundleDocument[]> {
    return this.http.post<BundleDocument[]>(`${this.backendUrl}/save-bundle-documents`, documents);
  }

}

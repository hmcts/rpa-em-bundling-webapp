import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UrlFixerService} from '../../../utils/url-fixer.service';

@Injectable()
export class AnnotationsService {

  private annotationSet: any;

  constructor(private httpClient: HttpClient,
              private urlFixer: UrlFixerService) {
  }

  getAnnotations(documentId, pageNumber): Promise<any> {
    return this.lookForAnnotationSets(documentId).then(possibleSet => {
      return this.getOrCreateAnnotations(possibleSet, documentId, pageNumber).then(annotations => {
        return {
          documentId,
          pageNumber,
          annotations
        };
      });
    });
  }

  private getOrCreateAnnotations(possibleSet, url, page) {
    if (possibleSet) {
      this.annotationSet = possibleSet;
      return this.extractNotes(possibleSet, page);
    }
    return this.initiateNewSet(url);
  }

  private lookForAnnotationSets(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const httpOptions = this.getHttpOptions();
      const annoUrl = `/demproxy/an/annotation-sets/filter?url=${url}`;
      this.httpClient.get<any>(annoUrl, httpOptions).subscribe(response => {
        if (response._embedded && response._embedded.annotationSets && response._embedded.annotationSets.length) {
          resolve(response._embedded.annotationSets[0]);
        } else {
          resolve(null);
        }
      }, reject);
    });
  }

  private extractNotes(set, page) {
    return new Promise(resolve => {
      resolve(set.annotations
        .filter(a => a.type !== 'PAGENOTE' && a.page === page)
        .map(anno => {
          anno.uuid = anno._links.self.href;
          return anno;
        }));
      });
  }

  private initiateNewSet(url: string) {
    return new Promise((resolve, reject) => {
      const body = {
        documentUri: url,
        annotations: [],
      };
      this.httpClient.post('/demproxy/an/annotation-sets', body, this.getHttpOptions()).subscribe(response => {
          this.annotationSet = response;
          resolve([]);
        },
        reject);
    });
  }

  addAnnotation(page: number, annotation: any): Observable<any> {
    annotation.page = page;
    return this.httpClient.post(this.urlFixer.fixAnno(this.annotationSet._links['add-annotation'].href),
      annotation,
      this.getHttpOptions()).map((anno: any) => {
      anno.type = (<string>annotation.type).toLowerCase();
      return anno;
    });
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
  }

  deleteAnnotation(annotationUrl: string) {
    return this.httpClient.delete(this.urlFixer.fixAnno(annotationUrl), this.getHttpOptions());
  }
}

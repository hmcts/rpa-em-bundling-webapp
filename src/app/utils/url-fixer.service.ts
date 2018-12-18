import { Injectable } from '@angular/core';

@Injectable()
export class UrlFixerService {
  public fixDm(url: string): string {
    return url.replace(/http.*\/documents\//, '/demproxy/dm/documents/');
  }
}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError } from 'rxjs';

@Injectable()
export class AppConfig {

  private config: Config;

  constructor(private http: HttpClient) {}

  public load(): Promise<void> {
    console.log('Loading app config...');

    const configUrl = environment.configUrl;

    return new Promise<void>((resolve, reject) => {
      this.http
        .get(configUrl)
          .subscribe((config: Config) => {
            this.config = config;
            console.log('Loading app config: OK');
            resolve();
          }, error => {
            console.error('Configuration file "config.json" could not be read');
            reject();
            return throwError(error.json().error || 'Server error');
          });
    });
  }

  public getLoginUrl(): string {
    return this.config.login_url;
  }

  getAnnotationUrl() {
    return this.config.annotation_url; // TODO Remove this stuff
  }
}

export class Config {
  login_url: string;
  annotation_url: string;
}

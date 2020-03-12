import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  server: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io';
  apiUrl: string = '/api/v1';
  serverWhitApiUrl: string = this.server + this.apiUrl;
  stringDragon: string = '/dragon';

  constructor() { }

  getDragonUrl() {
    return this.serverWhitApiUrl + this.stringDragon;
  }

}

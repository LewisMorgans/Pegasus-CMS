import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUrl } from 'src/app/shared/enums/http-url.component';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private readonly _http: HttpClient) { }

  get(route: string){
    return this._http.get(`${HttpUrl.BaseUrl}/${route}`).subscribe()
  }

  post(route: string, options: Array<any>) {
    return this._http.post(`${HttpUrl.BaseUrl}/${route}`, options).subscribe()
  }

  delete(route: string, options: Array<any>) {
    return this._http.post(`${HttpUrl.BaseUrl}/${route}`, options).subscribe()
  }
}

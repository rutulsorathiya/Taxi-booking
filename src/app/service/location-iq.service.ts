import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locationIqKey } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class LocationIqService {
  
  autoCompleteUrl:string = 'https://us1.locationiq.com/v1/autocomplete?q=';
  secrateKey :string = '&key=' +  locationIqKey;

  constructor(private _httpClient:HttpClient) { }

  autoComplete(words : string){
    return this._httpClient.get<any>(this.autoCompleteUrl + encodeURIComponent(words) + this.secrateKey);
  }

}

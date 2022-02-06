import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuppyServiceService {

  constructor(private httpClient:HttpClient) {} 

    public findDogByBreedName(breedname:String):Observable<any>{
      return this.httpClient.get("http://localhost:12345/api/dog/" + breedname) as Observable<any>;
    }
}

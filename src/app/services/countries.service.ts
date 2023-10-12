import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute,Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url = `${environment.url}`
  


  constructor(private http:HttpClient) { }

  getAllCountries(){
      return this.http.get(`${this.url}/all`);
  }

  getCountriesByDetails(country:string){
      return this.http.get(`${this.url}/name/${country}`)
  }

  getCountriesByRegion(region:string){
    return this.http.get(`${this.url}/region/${region}`)

  }

}

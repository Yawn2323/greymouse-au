import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import {  CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries : any ;
  imageLoaded=false;
  countryService:any;

  constructor(private countryProvider:CountriesService) {

  }

  ionViewWillEnter(){
      this.getAllCountries();
      setTimeout(() => {
        this.imageLoaded = true; 
      }, 2000);  
  }


  getAllCountries(){
      this.countryProvider.getAllCountries().subscribe(
          data => {
              this.countries = data;
              this.countryService = [...this.countries]
          } , err => {
              console.log('Error')
          }
      )
  }

  toggleTheme(event:any) {
      console.log(event);
      if(event.detail.checked) {
          document.body.setAttribute('color-theme','dark');
      } else {
        document.body.setAttribute('color-theme','light');

      }
  }


  filterRegion(event:any){
      if(event.detail.value === 'all') {
        this.getAllCountries();
      } else {
        this.countryProvider.getCountriesByRegion(event.detail.value).subscribe(
          data => {
              this.countries = data;
          } ,err => {
              throwError(err)
          }
        )
      }
  }


  filterCountries(event:any){
    const val = event.target.value.toLowerCase();
    if (!val) { this.countries = this.countryService; }
    const temp = this.countryService.filter((row) => {
      return Object.keys(row).some((property) => {
          return row[property] === null ? null : row[property].toString().toLowerCase().indexOf(val) !== -1;
      });
    });
    this.countries = temp;
  }

}

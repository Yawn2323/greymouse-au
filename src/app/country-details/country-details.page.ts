import { CountriesService } from './../services/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit {

  country = this.route.snapshot.params['country'];
  currencies: any;
  countryDetails: any;
  languages: any;

  constructor(private route:ActivatedRoute,private countryProvider:CountriesService) { }

  ngOnInit() {
    this.getCountryDetails();
  }


  toggleTheme(event:any) {
    console.log(event);
    if(event.detail.checked) {
        document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');

    }
  }


    getCountryDetails(){
      this.countryProvider.getCountriesByDetails(this.country).subscribe(
          data => {
              console.log(data);
              this.countryDetails = data[0]
              this.languages =  Object.values(data[0].languages)
              
          }, err => {
              throwError(err)
          }
      )
  }

}

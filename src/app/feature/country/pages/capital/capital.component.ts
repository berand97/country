import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/services/country.service';
import { Country } from '../../shared/interfaces/country.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {
  existError: boolean = false;
  termino: string = '';
  country: Country[] = [];



  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  buscar(pais: string){
    this.termino = pais;
    this.existError = false;
    this.countryService.buscarCapital(pais)
    .subscribe(resp=>{
      console.log(resp)
      this.country = resp;
    },(err)=>{
      this.existError = true;
      console.info(err)
    })
  }

  sugerencias(event: string){
    this.existError = false;

  }
}

import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country.interface';
import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {


  existError: boolean = false;
  termino: string = '';
  country: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;



  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  buscar(pais: string) {
    this.mostrarSugerencias = false;
    this.termino = pais;
    this.existError = false;
    this.countryService.buscarPais(pais)
      .subscribe(resp => {
        console.log(resp)
        this.country = resp;
      }, (err) => {
        this.existError = true;
        console.info(err)
      })
  }

  sugerencias(termino: string) {
    this.existError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.countryService.buscarPais(termino)
      .subscribe(paises => {
        this.paisesSugeridos = paises.splice(0, 3),
          (err: any) => this.paisesSugeridos = []
      })

  }

  buscarSugerido(termino: string) {
    this.buscar(termino)

  }

}

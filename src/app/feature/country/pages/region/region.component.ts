import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country.interface';
import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regiones: string[] = ["eu", "efta", "caricom", "pa", "au", "usan", "eeu", "al", "asean", "cais", "cefta", "nafta", "saarc"]

  regionActiva: string = "";

  paises: Country[] = [];

  constructor(
    private paisService: CountryService
  ) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if(region == this.regionActiva){
      return
    }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe((region) => {
        this.paises = region;
      })
  }



}

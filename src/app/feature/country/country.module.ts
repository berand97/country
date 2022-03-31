import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { DetailsComponent } from './pages/details/details.component';
import { CountryRoutingModule } from './country.routing';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }

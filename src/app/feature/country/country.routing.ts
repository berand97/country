import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  { path: '', component: CountryComponent, pathMatch: 'full' },
  { path: 'region', component: RegionComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'country/:id', component: DetailsComponent },
  { path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }

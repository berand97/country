import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private api: string = 'https://restcountries.com/v3.1'

  get params() {
    return new HttpParams()
      .set('fields','name,capital,cca2,flags,population,alpha2Code')
  }

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.api}/name/${termino}`;
    return this.http.get<Country[]>(url)

  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.api}/capital/${termino}`;
    return this.http.get<Country[]>(url)

  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.api}/alpha/${id}`;
    return this.http.get<Country>(url)

  }

  buscarRegion(region: string): Observable<Country[]> {
    const apiV2 = 'https://restcountries.com/v2'
    const url = `${apiV2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url,{params: this.params});

  }



}

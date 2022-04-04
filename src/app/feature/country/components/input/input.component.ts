import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../shared/interfaces/country.interface';
import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() onTermino: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();




  termino: string = '';
  existError: boolean = false;

  country: Country[] = [];

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(valor => {
        this.onDebounce.emit(valor)
      })
  }

  buscar() {
    this.onTermino.emit(this.termino)
  }

  teclaPresionada() {
    this.debouncer.next(this.termino)
  }

}

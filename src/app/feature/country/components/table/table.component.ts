import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../shared/interfaces/country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {



  @Input() country: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

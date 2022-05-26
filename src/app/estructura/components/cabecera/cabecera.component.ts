import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public hoy: Date;

  constructor() {
    this.hoy = new Date();
  }

  ngOnInit(): void {
  }

}

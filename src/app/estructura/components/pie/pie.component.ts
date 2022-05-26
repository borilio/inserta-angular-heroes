import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() public year: number;
  @Input() public texto: string;
 

  constructor() {
    this.year = new Date().getFullYear();
    this.texto = '© Superhéroes en Angular Nuevo Footer';
  }

  ngOnInit(): void {
  }

}

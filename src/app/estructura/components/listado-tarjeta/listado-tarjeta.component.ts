import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css']
})
export class ListadoTarjetaComponent implements OnInit {

  public heroes?: Heroe[];
  public cargando: boolean;

  constructor(private _heroesService: HeroesService) {
    this.cargando = false;
  }
  
  ngOnInit(): void {
    this.heroes = [];
    this.cargando = true; //comenzamos la animación de carga
    let datos = this._heroesService.getHeroes();
    datos.subscribe({
      next: (respuesta) => {
        this.heroes = respuesta;
      },
      error: (error) => {
        this.heroes = [];
        console.error("Hubo un error en la petición", error);
        
      },
      complete: () => {
        this.cargando = false;
      }
    });


    console.log("Arrancamos el componente ListadoTarjetaComponent");
  }

}

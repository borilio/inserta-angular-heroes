import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent implements OnInit {
  public lista: Heroe[];
  public error?: HttpErrorResponse;
  public cargando: boolean;

  @Output() public eventoFavorito = new EventEmitter<Heroe>();
  
  constructor(private _heroesService:HeroesService) {
    this.lista = [];
    this.cargando = false;
  }

  //El método ngOnInit se ejecuta inmediatamente después del constructor()
  ngOnInit(): void {
    //Así mostramos la animación de carga...
    this.cargando = true;
    //Hacemos la llamada al servicio desde en ngOnInit, ya que no se aconseja hacer tareas
    //pesadas desde el constructor
    let datosQueLlegaran = this._heroesService.getHeroes();
    datosQueLlegaran.subscribe({
      next: (resp) => {
        console.log("Tenemos respuesta", resp);
        this.lista = resp;
      },
      error: (error) => {
        console.error("Hubo un error en la petición", error);
        this.lista = [];
      },
      complete: () => {
        //Este método será ejecutado SIEMPRE
        console.log("Terminamos con la petición");
        this.cargando = false;        
      }
    });

    console.log("Arrancamos el componente ListadoTablaComponent");
  }

  public seleccionarFavorito(heroe : Heroe) {
    console.log("El hijo le dice al padre... mi héroe favorito es " + heroe.nombre);
    this.eventoFavorito.emit(heroe);
  }
}

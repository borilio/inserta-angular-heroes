import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http : HttpClient ) { }

  public getHeroes(): Observable<Heroe[]> {
    let datos = this._http.get<Heroe[]>("http://heroes.mocklab.io/heroes");
    // let datos = this._http.get<Heroe[]>("https://my-json-server.typicode.com/borilio/curso-angular/heroes");
    return datos;
  }


}

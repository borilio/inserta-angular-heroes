import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes.service';
import { EsPeligrosoPipe } from './pipes/es-peligroso.pipe';


@NgModule({
  declarations: [
    EsPeligrosoPipe
  ],
  exports : [
    EsPeligrosoPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [ 
    HeroesService 
  ]
})
export class SharedModule { }

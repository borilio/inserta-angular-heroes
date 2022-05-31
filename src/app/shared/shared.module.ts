import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes.service';
import { EsPeligrosoPipe } from './pipes/es-peligroso.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EsPeligrosoPipe
  ],
  exports : [
    EsPeligrosoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ 
    HeroesService 
  ]
})
export class SharedModule { }

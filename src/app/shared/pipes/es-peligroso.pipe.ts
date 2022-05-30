import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/estructura/models/heroe.model';

@Pipe({
  name: 'esPeligroso'
})
export class EsPeligrosoPipe implements PipeTransform {

  transform(value: Heroe): string {
    if (value.honor <=0 && value.poder > 200) {
      return "👿";
    } else{
      return "😇"
    }

  }

}

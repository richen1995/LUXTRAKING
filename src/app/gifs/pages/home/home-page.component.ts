import { Component } from '@angular/core';
import { GifsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-page.component.html'
  
})
export class HomePageComponent {
  constructor(private giftsService: GifsService){}

  get gifs(): Gif[]{
    return this.giftsService.gifList
  }

}

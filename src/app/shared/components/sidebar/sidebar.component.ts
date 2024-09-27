import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  onTagClick(tag:string):void{
    console.log("Has hecho click aqui:",tag)
    this.gifsService.searchTag(tag);
  }
}

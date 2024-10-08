import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifts.service';

@Component({
    selector: 'gifts-search-box',
    template: `<h5>Buscar: </h5>
                    <input type="text"
                        class="form-control"
                        placeholder="BuscarGiftd"
                        (keyup.enter)="searchTag()"
                        #txtTagInput
                    >
                  `
    })
export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement> 

    constructor(private gifsService: GifsService) { }

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
        console.log({newTag})
    }
}
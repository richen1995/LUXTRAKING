import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
    
    const GIPHY_API_KEY = 'dCpDvBTIUMfE4r9cxf2js2ZxsZstc3CX';


    @Injectable({providedIn: 'root'})
    /*providedIn: 'root'} => Hace que el srv este disponible para toda la aplicacion
    que inyecte este servicio*/ 
export class GifsService {

    public gifList: Gif[] = [];

    private _tagsHistory: string[] = [];
    private api_Key: string = 'dCpDvBTIUMfE4r9cxf2js2ZxsZstc3CX';
    private serviceUrl: string =  'https://api.giphy.com/v1/gifs'

    constructor(private http:HttpClient) { }

    get tagsHistory(){
        return [...this._tagsHistory]
    }

    private organizeHistory(tag: string){
        tag =  tag.toLowerCase()
        if(this._tagsHistory.includes(tag)){ //sI hay el TAG en el array
            this._tagsHistory =  this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }
        
        this._tagsHistory.unshift(tag);
        this._tagsHistory =  this.tagsHistory.splice(0,10);
    }

    searchTag(tag: string):void{
        
        if(tag.length === 0) return; //Valida los enter para que 
                                        //no se almacenen en el vector
        this.organizeHistory(tag);
        const params = new HttpParams()
                        .set('api_key',this.api_Key)
                        .set('limit', '10')
                        .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{params:params})
                  .subscribe(resp =>{
                    console.log(resp);
                    console.log(resp.data);
                    this.gifList = resp.data;
                    console.log({gifs: this.gifList});
                    
                  })
        /*console.log(this.tagsHistory );
        const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=dCpDvBTIUMfE4r9cxf2js2ZxsZstc3CX&q=valorant&limmit=10');
        const data = await resp.json();
        console.log(data)*/
    }
}
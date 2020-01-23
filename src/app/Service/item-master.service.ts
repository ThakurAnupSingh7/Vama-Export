import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs'
import { ItemMaster } from '../item-master/item-master';

@Injectable({
  providedIn: 'root'
})
export class ItemMasterService {


  private _itemMasterUrl ="http://localhost:8080/export/createItems"

  constructor(private http : HttpClient ) { }

  Item_master(form):Observable<ItemMaster>{
    return this.http.post<ItemMaster>(this._itemMasterUrl, form,{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }

}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Pdetails } from '../product-details/product-details'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

private _productdetailsUrl="http://localhost:8080/productdetails/create"


  constructor( private http : HttpClient) { }

  Product_Details(form):Observable<Pdetails>{
    return this.http.post<Pdetails>(this._productdetailsUrl , form,{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }



}

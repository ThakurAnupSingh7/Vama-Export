import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductDetailsService } from "../Service/product-details.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {


  form:FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _pservice: ProductDetailsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      pname: [" "],
      pmeasurement: [" "],
      finishing:false,
      fitting: false,
      polishing: false,
      pimg: [" "],
      comment:[" "],
    });
  }

  onSubmit(form) {
    var json = JSON.stringify(this.form.value);
    this._pservice.Product_Details(json).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    console.log(this.form.value)
   
  }
}

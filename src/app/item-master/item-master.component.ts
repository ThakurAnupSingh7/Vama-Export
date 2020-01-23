import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductDetailsService } from '../Service/product-details.service';
import { ItemMasterService } from '../Service/item-master.service';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit {
  form:FormGroup;

  constructor( private fb: FormBuilder,
    private _pservice: ItemMasterService) { }

  ngOnInit() {
    
    this.form = this.fb.group({
       itemName: [" "],
       // itemPhotos: ["Rishipic"],
      unitMeasurement:[" "],
      itemNoOfPiece:[" "],
      liquidMeasurement: [" "], 
      lengthMeasurement: [" "], 
      widthMeasurement:[" "],
      hightMeasurement:[" "],
      item_Size: [" "], 
      item_Colour:[" "], 
     itemType: [" "], 
     itemMaterial: [" "],
     vendor_Estimate_time: [" "], 
     itemAvg_Cost:[" "],
     itemTarget_Cost:[" "],
     itemCreatedTime: [" "], 
     itemLastUpdate:[" "], 
      itemRemarks: [" "], 
     itemComments: [" "], 
      
      
    });


  }


  onSubmit(form) {
    var json = JSON.stringify(this.form.value);
    this._pservice.Item_master(json).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    console.log(this.form.value)
   
  }

}

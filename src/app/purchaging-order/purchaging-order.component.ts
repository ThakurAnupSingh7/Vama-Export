import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-purchaging-order',
  templateUrl: './purchaging-order.component.html',
  styleUrls: ['./purchaging-order.component.scss']
})
export class PurchagingOrderComponent implements OnInit {
 
  PurchasingForm = this.fb.group({
    po_id: ['', Validators.required],
    i_id: ['', Validators.required],
    i_name: ['', Validators.required],
    quantity: ['', Validators.required],
    p_name: ['', Validators.required],
    comment: ['', Validators.required],
   
   
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }
get po_id(){ return this.PurchasingForm.get('po_id');}
get i_id(){ return this.PurchasingForm.get('i_id');}
get i_name(){ return this.PurchasingForm.get('i_name');}
get quantity(){ return this.PurchasingForm.get('quantity');}
get p_name(){ return this.PurchasingForm.get('p_name');}
get comment(){ return this.PurchasingForm.get('comment');}


onSubmit() {
  console.warn(this. PurchasingForm.value);
}






  }



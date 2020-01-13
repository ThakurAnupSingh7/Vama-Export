import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit {

mesurment=[
  {option:"Piece", unit:"piece",},
  {option:"Liter", unit:"litter",},
  {option:"Measurement", unit:"meter",}
]


  constructor() { }

  ngOnInit() {
  }

}

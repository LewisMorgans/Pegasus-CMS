import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private formFields = [
    'Sku',
    'Title',
    'Description',
    'Price',
    'Weight',
    'Images',
    'Stock',
  ]

}

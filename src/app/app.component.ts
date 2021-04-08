import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billing';
  isCollapse = true;
  activeId = 'linkItems'
  itemList = [
    {name:'Item 1', subCategory: 'Category 1', quantity: 4, unitPrice: 3},
    {name:'Item 2', subCategory: 'Category 2', quantity: 5, unitPrice: 13},
    {name:'Item 3', subCategory: 'Category 3', quantity: 11, unitPrice: 4},
    {name:'Item 5', subCategory: 'Category 1', quantity: 7, unitPrice: 5},
    {name:'Item 6', subCategory: 'Category 1', quantity: 9, unitPrice: 12},
    {name:'Item 7', subCategory: 'Category 4', quantity: 2, unitPrice: 9}
  ]
  collapseChange(){
    this.isCollapse = !this.isCollapse;

  }

}

import { Injectable } from '@angular/core';
//dependency injection using angular
@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  //creating a list to store data
  items = []

  constructor() { }

  //adding item to list
  addItem(data) {
    this.items.push(data);
  }
  //edit item in list
  editItem(data, index) {
    this.items[index] = data;
  }
  //remove item in list
  removeItem(index) {
    this.items.splice(index, 1);
  }
  //get list function
  getItems() {
    return this.items;
  }
}
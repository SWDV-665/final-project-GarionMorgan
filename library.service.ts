import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//angular dependency injection
export class LibraryService {

  //items within library
  items = [
    {
      title: "Hunger Games",
      author: "Suzanne Collins"
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      title: "The Eyes of the Dragon",
      author: "Stephen King"
    },
    {
      title: "Vicioius",
      author: "V.E. Schwab"
    },
    {
      title: "Later",
      author: "Stephen King"
    },
    {
      title: "Stardust",
      author: "Neil Gaiman"
    }
  ]

  constructor() { }
  //returns items from library to tab2.page.ts file
  getItems() {
    return this.items;
  }
}

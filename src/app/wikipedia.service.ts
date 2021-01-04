import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  //1 Adding Service: add method to class
  search(term: string) {
    return('from WikipediaService.search() and the term is ' + term)
  }
}

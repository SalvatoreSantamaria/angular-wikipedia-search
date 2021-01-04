import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  // dependency injection. added immediately to wikipediaservice when class is instatiated
  constructor(private http: HttpClient) { }

  //1 Adding Service: add method to class
  search(term: string) {
    //return('from WikipediaService.search() and the term is ' + term)
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}

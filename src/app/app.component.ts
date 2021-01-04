import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = []

  // 2 Adding Service:
  // constructor is the first thing to be call whenever instance of AppComponent is created
  constructor(private wikipedia: WikipediaService) {
  }

  title = 'wikipediasearch';
  //child to parent communication 4: 
  // takes in data from the child component via the app.component.html file
  onTerm(term: string) {
    console.log('From onTerm function. I am the app and here is the Term: ' + term)
  
  // 3 Adding Service:
  // access the instance of wikipedia and call the search method on it
    this.wikipedia.search(term).subscribe((res: any) => {
      console.log(res)
      //see console.log for response property, query property, search property
      this.pages = res.query.search;
    })
  }
}

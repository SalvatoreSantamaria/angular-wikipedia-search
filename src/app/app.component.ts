import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipediasearch';
  //child to parent communication 4: 
  // takes in data from the child component via the app.component.html file
  onTerm(term: string) {
    console.log('I am the app and here is the term: from onTerm function')
  }
}

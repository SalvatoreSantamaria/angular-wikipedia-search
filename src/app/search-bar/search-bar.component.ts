import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  // 2. Using a method to update
  // onInput(e: string) {
  //   this.term = e
  //   console.log(this.term)
  // }


}

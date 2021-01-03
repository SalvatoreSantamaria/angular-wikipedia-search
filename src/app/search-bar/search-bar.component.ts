import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  //child to parent communication 1: 
  // sending data back up to parent via function 'submitted' which is an instance of EventEmitter
  @Output() submitted = new EventEmitter<string>();


  //getting updated with every keypress
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  //child to parent communication 2: 
  onFormSubmit(e: any) {
    //prevent form submission with preventDefault()
    e.preventDefault();
    console.log(this.term)
    return(this.submitted.emit(this.term));
  }


  // 2. Using a method to update
  // onInput(e: string) {
  //   this.term = e
  //   console.log(this.term)
  // }


}

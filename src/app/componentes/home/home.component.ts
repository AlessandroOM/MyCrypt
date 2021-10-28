import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() isAuthentcated : boolean;
  @Input() isAddNewUser : boolean;


  constructor() { 
    this.isAuthentcated = false;
    this.isAddNewUser = false;
  }

  ngOnInit(): void {
  }

}

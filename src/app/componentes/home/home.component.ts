import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() isAuthentcated : boolean;

  constructor(private global: GlobalService) { 
    this.isAuthentcated = false;
  }

  ngOnInit(): void {
  }

}

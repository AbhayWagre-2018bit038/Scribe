import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  name:string ='Abhay Bhagwat Wagre';
  amount :number=3500;
  dateofbirth=new Date();
  constructor() { }

  ngOnInit() {
  }

}

import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pepoles: any[]=[
    {
      "name":"Abhay",
      "age":"20",
      "states":"MH"
    },
    {
      "name":"raj",
      "age":"10",
      "states":"AP"
    },
    {
      "name":"aniket",
      "age":"15",
      "states":"HB"
    },
    {
      "name":"hihelo",
      "age":"15",
      "states":"PJ"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onPersonClicked(){
      console.log("Person Clicked")
  }

}

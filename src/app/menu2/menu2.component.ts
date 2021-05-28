import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore' ;

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  loggedIn : boolean =false;
  user : any={};
  constructor() {
     this.user=firebase.auth().currentUser;
     if(this.user){
       this.loggedIn=true;
     }
     else{
       this.loggedIn=false;
     }
     firebase.auth().onAuthStateChanged((user)=>{

      if(user){
        this.loggedIn=true;
        this.user=user;
      }
      else{
        this.loggedIn=false
      }
    

     })
   }

  ngOnInit() {
  }
  logout(){
    firebase.auth().signOut();
  }

}

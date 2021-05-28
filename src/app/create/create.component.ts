import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { truncate } from 'fs';
import { error } from 'protractor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: string;
  content: string;
  @Output('postCreated') postCreated = new EventEmitter
  
  constructor() { }

  ngOnInit() {
  }
  createPost(){
    firebase.firestore().collection("posts").add({
      title: this.title,
      content:this.content,
      owner:firebase.auth().currentUser.uid,
      created:firebase.firestore.FieldValue.serverTimestamp()
    }).then((data)=>{
      console.log(data);
      this.postCreated.emit();
      this.title="";
      this.content="";
    }).catch((error)=>{
      console.log(error);
    })
  }
}

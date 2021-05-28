import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore' ;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:any=[];
  message:string;
  constructor( public activatedrouter : ActivatedRoute ) {
    let id =this.activatedrouter.snapshot.paramMap.get('id');
    this.getProfile();
  }

  ngOnInit() {
  }
  getProfile(){
    let userId=firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc(userId).get().then((documentSnapshot)=>{
      this.user=documentSnapshot.data();
      this.user.displayName= this.user.firstName+' '+this.user.lastName;
      this.user.id=documentSnapshot.id;
      console.log(this.user);
    }).catch((error)=>{
      console.log(error);
    })
  }
  update(){
    this.message="updating Profile..";

    firebase.auth().currentUser.updateProfile({
      displayName:this.user.displayName,photoURL:this.user.photoURL
    }).then(()=>{
      let userId=firebase.auth().currentUser.uid;
      firebase.firestore().collection("users").doc(userId).update({
        firstName:this.user.displayName.split(' ')[0],
        lastName:this.user.displayName.split(' ')[1],
        hobbies:this.user.hobbies,
        interests:this.user.interests,
        bio:this.user.bio
      }).then(()=>{
        this.message="profile Update Scuccessfully.";
      }).catch((error)=>{
        console.log(error);
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, FormControl,Validators }from '@angular/forms';
import {AuthService} from '../auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm : FormGroup ;
  message:string=" ";
  userError: any;

  constructor(public fb:FormBuilder,public authservice:AuthService) {
    this.myForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]]
    },{
      validators: this.checkIFMatchingPasswords("password","confirmpassword")
    })
   }

  checkIFMatchingPasswords(passwordKey:string,confirmpasswordKey:string){
    return(group:FormGroup)=>{
      let password=group.controls[passwordKey];
      let confirmpassword=group.controls[confirmpasswordKey];

      if(password.value ==confirmpassword.value){
        return;
      }
      else{
        confirmpassword.setErrors({
          notEqualToPassword:true
        })
      }
    }
  }

  onSubmit(signupform: any){
    let email: string= signupform.value.email;
    let password: string=signupform.value.password;
    let firstName: string=signupform.value.firstName;
    let lastName: string=signupform.value.lastName;

    this.authservice.signup(email,password,firstName,lastName).then((user: any) => {

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName:signupform.value.firstName,
        lastName:signupform.value.lastName,
        email:signupform.value.email,
        photoURL:user.photoURL,
        interests:"",
        bio:"",
        hobbies:""
      }).then(()=>{
        this.message ="you have succesfully signed up .Please Login."
      })

    }).catch((error) =>{
      console.log(error);
      this.userError=error;
    })

  }

  ngOnInit(): void {
  }

}

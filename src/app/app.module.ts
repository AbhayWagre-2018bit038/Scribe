import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import  firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonComponent } from './person/person.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { Menu2Component } from './menu2/menu2.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { Home1Component } from './home1/home1.component';
import { CreateComponent } from './create/create.component';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let config = {
  apiKey: "AIzaSyAY0vY5cU6EA9ZfjSRalPBj1ylXpESrmp4",
  authDomain: "scribenew-bd3de.firebaseapp.com",
  projectId: "scribenew-bd3de",
  storageBucket: "scribenew-bd3de.appspot.com",
  messagingSenderId: "32695024283",
  appId: "1:32695024283:web:da59afeff50abca3c1643e",
  measurementId: "G-XMXF3YY6PF"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    Menu2Component,
    MyblogsComponent,
    ProfileComponent,
    Home1Component,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up-password-comp/pop-up/pop-up.component';
import { ChildComponentComponent } from './pop-up-password-comp/pop-up/child-component/child-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    ChildComponentComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

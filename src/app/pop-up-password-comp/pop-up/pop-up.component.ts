import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  
  
  title = 'Passwordstrength';
  passwordform:FormGroup
  passwordIsValid
  
  constructor(
  
   private fb:FormBuilder

  )
{
 
}
  ngOnInit()
  {
    this.passwordform = this.fb.group({
      password: ['', Validators.required],
  });

}
passwordValid(event) {
  this.passwordIsValid = event;
  console.log("password valid" , this.passwordIsValid);
}
  
}

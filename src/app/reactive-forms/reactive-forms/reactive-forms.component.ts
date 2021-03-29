import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  form = new FormGroup({
    gender: new FormControl('', Validators.required),
    name : new FormControl('', Validators.required)
  });
  errorCheck: boolean;

  constructor() { }

  ngOnInit(): void {
  }


 
  

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log('form works  😜');
  }

  changeGender(e) {
    if(e == undefined){
      this.errorCheck = true ;
    }else{
      this.errorCheck = false ;
    }
    console.log(e.target.value);
  }

}

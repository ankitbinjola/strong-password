import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements  OnChanges {
  static checkedLength: number;
  requiredFields: boolean;
  static loweandupper: boolean;
  count: number = 0;
  lowercaseError: string;
  upperLettersError: string;
  numbersError: string;
  symbolsError: string;
  eightcharError: string;

  constructor() { }

  length0: string;
  length1: string;
  length2: string;
  length3: string;
  message=''

  @Input() public passwordCheck: string;
  @Output() Strength = new EventEmitter<boolean>();

  private colors = ['red', 'darkorange', 'green', 'darkgreen'];

   validateData(p){
    var arraytoValidate: boolean[] = [] ;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    const lowerLetters = /[a-z]+/.test(p); 
    // lowwer letter 
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);
    const eightchar = (p.length > 8) ? true : false      

      
    var arraytoValidate = [lowerLetters, upperLetters, numbers, symbols, eightchar];
    const errors = ['error1','error2','error3','error4','error5'];


    if(arraytoValidate[0] == true){
      this.lowercaseError = 'lowercase';
      console.log(errors[0])
    }else{
      this.lowercaseError = '';
    }
     if(arraytoValidate[1] == true){
      console.log(errors[1])
      this.upperLettersError = 'upperLetters';
    }else{
      this.upperLettersError = '';
    }
     if(arraytoValidate[2] == true){
      console.log(errors[2])
      this.numbersError = 'numbers'
    }else{
      this.numbersError = '';
    }
     if(arraytoValidate[3] == true){
      console.log(errors[3])
      this.symbolsError = 'symbols'
    }else{
      this.symbolsError = '';
    }
    if(arraytoValidate[4] == true){
      console.log(errors[4])
      this.eightcharError = 'eightchar'
    }else{
      this.eightcharError = '';
    }
    console.log(".................");
    console.log(arraytoValidate);


    
      arraytoValidate.forEach(item => {
        if(item === false){
          console.log({'isvalidate' : false,
            'arraydata' : arraytoValidate
           })
        }else{
          console.log({'isvalidate' : true,
          'arraydata' : arraytoValidate
         })

        }
      })    
      

      }     


  private static Strengths(p) {
    let checklen = 0;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p); 
    // lowwer letter 
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let Passwordmaches = 0;
    for (const flag of flags) {
      // console.log("flag-values",flag);
      Passwordmaches += flag === true ? 1 : 0;
      console.log("flag values",Passwordmaches);
    }

    checklen += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    checklen += Passwordmaches * 10;

    //Check length
    checklen = (p.length <= 8) ? Math.min(checklen, 3) : checklen;


    checklen = (Passwordmaches === 1) ? Math.min(checklen, 10) : checklen;
    checklen = (Passwordmaches === 2) ? Math.min(checklen, 20) : checklen;
    checklen = (Passwordmaches === 3) ? Math.min(checklen, 30) : checklen;
    checklen = (Passwordmaches === 4) ? Math.min(checklen, 40) : checklen;
    
    this.checkedLength = checklen ;  
    return checklen ;

    
  }


  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {

    const password = changes.passwordCheck.currentValue;

    this.validateData(password);


    this.setBarColors(4, '#DDD'); // white
    if (password) {
      const c = this.getColor(ChildComponentComponent.Strengths(password));  //gives color

      
      this.setBarColors(c.idx, c.col); //gives index and color

      const pwdStrength = ChildComponentComponent.Strengths(password);

      if(pwdStrength>=30)
      {
      this.Strength.emit(true)
      this.requiredFields = true;
      }
      else
      {
        this.Strength.emit(false)
      }
      switch (c.idx) {
        case 1:
          this.message = 'Weak'+'(Ex:Hari@12345)';
          console.log(this.message, "case 1");
          console.log(c.idx)
          break;
        case 2:
          this.message = 'Average' +'(Ex:Hari@12345)';
          console.log(this.message, "case 2");
          console.log(    c.idx)
          break;
        case 3:
          this.message = 'Good' +'(Ex:Hari@12345)';
          console.log(this.message, "case 3");
          console.log(c.idx)
          break;
        case 4:
          this.message = 'Strong';
          console.log(this.message, "case 4");
          console.log(c.idx)
          break;
      }
    } else {
      this.message = '';
    }
  }

  private getColor(s) {
    let idx = 0;
    if (s <= 10) {
        idx = 0;
    } else if (s <= 20) {
        idx = 1;
    } else if (s <= 30) {
        idx = 2;
    } else if (s <= 40) {
        idx = 3;
    } else {
        idx = 4;
    }
    return {
        idx: idx + 1,
        col: this.colors[idx]
    };
  }

  private setBarColors(count, col) {
    for (let n = 0; n < count; n++) {
        this['length' + n] = col;
        console.log("column :", col)
    }
  }

}
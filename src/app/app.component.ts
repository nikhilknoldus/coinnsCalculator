import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'coin-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.style.css']
})

//Creating component
export class AppComponent implements  OnInit {
  constructor(private _formbuilder: FormBuilder){}

  /*Object for Form Group*/
  currencyForm: FormGroup;
  /*Array of required currency  coins*/
  coins = [200, 100, 50, 20,10, 2, 1];
  /*Created array to set output in this and loop through*/
  getCoinsList:any=[];
  /*Sample array for showing the calculated currency*/
  outputCoins=['2£','1£', '50p', '20p', '10p', '2p','1p']

 /*Initilization of form and currency input with validations*/
  ngOnInit(){
    this.currencyForm = this._formbuilder.group({
      currency: ['£12.56p',Validators.compose([Validators.required, Validators.pattern(/^(\u00A3)?([0-9.]+)p?$/)])]
    })
  }

/*calculate function with all logic required to calculate the coins*/
  calculate(amount:any) {
    if (this.currencyForm.valid) {
      amount = amount.replace(/[^\d.-]/g, '');
      amount = parseFloat(amount).toFixed(2);

      console.log(amount);
      if (amount.indexOf("£") > -1 || amount.indexOf(".") > -1) {
        amount = (amount * 100).toFixed(0);
      } else {
        amount = amount.replace(/[^\d.-]/g, '');
        amount = parseFloat(amount).toFixed(2);
        console.log('2',amount);
      }
       this.getCoinsList = this.setCurrencyValues(amount);
    }
  }

/*SetCurrencyValues function to list out the requried coins to reach the provided currency*/
  setCurrencyValues(amount:any) {
    var coinVal:any = [];
    let calc:any;
    for(let i = 0; i< this.coins.length; i++){
      calc = Math.floor(amount / this.coins[i]);
      amount = amount % this.coins[i];
      coinVal[i] =  calc;
    }
    return coinVal;
  };
}

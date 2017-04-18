"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_formbuilder) {
        this._formbuilder = _formbuilder;
        /*Array of required currency  coins*/
        this.coins = [200, 100, 50, 20, 10, 2, 1];
        /*Created array to set output in this and loop through*/
        this.getCoinsList = [];
        /*Sample array for showing the calculated currency*/
        this.outputCoins = ['2£', '1£', '50p', '20p', '10p', '2p', '1p'];
    }
    /*Initilization of form and currency input with validations*/
    AppComponent.prototype.ngOnInit = function () {
        this.currencyForm = this._formbuilder.group({
            currency: ['£12.56p', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/^(\u00A3)?([0-9.]+)p?$/)])]
        });
    };
    /*calculate function with all logic required to calculate the coins*/
    AppComponent.prototype.calculate = function (amount) {
        if (this.currencyForm.valid) {
            amount = amount.replace(/[^\d.-]/g, '');
            amount = parseFloat(amount).toFixed(2);
            console.log(amount);
            if (amount.indexOf("£") > -1 || amount.indexOf(".") > -1) {
                amount = (amount * 100).toFixed(0);
            }
            else {
                amount = amount.replace(/[^\d.-]/g, '');
                amount = parseFloat(amount).toFixed(2);
                console.log('2', amount);
            }
            this.getCoinsList = this.setCurrencyValues(amount);
        }
    };
    /*SetCurrencyValues function to list out the requried coins to reach the provided currency*/
    AppComponent.prototype.setCurrencyValues = function (amount) {
        var coinVal = [];
        var calc;
        for (var i = 0; i < this.coins.length; i++) {
            calc = Math.floor(amount / this.coins[i]);
            amount = amount % this.coins[i];
            coinVal[i] = calc;
        }
        return coinVal;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'coin-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.style.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent should', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent],
            providers: [forms_1.FormBuilder]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('be able to calculate when form is valid', function () {
        var result = comp.setCurrencyValues(12.3);
        expect(result).toEqual([0, 0, 0, 0, 1, 1, 0]);
    });
});
//# sourceMappingURL=app.component.spec.js.map
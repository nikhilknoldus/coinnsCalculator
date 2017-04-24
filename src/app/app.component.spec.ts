import { AppComponent } from './app.component';
import {FormBuilder, FormsModule, ReactiveFormsModule, } from "@angular/forms";
import {CommonModule} from "@angular/common";

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent should', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, CommonModule, ReactiveFormsModule],
      declarations: [ AppComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('be able to calculate when form is valid', () => {
    let result = comp.setCurrencyValues(12.3)
    expect(result).toEqual([0,0,0,0,1,1,0])
  } );

 //afterAll(() => setTimeout(() => 0, 1000))

});

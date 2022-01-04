/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordappComponent } from './wordapp.component';

describe('WordappComponent', () => {
  let component: WordappComponent;
  let fixture: ComponentFixture<WordappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

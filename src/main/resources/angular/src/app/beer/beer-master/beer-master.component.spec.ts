import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerMasterComponent } from './beer-master.component';

describe('BeerMasterComponent', () => {
  let component: BeerMasterComponent;
  let fixture: ComponentFixture<BeerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

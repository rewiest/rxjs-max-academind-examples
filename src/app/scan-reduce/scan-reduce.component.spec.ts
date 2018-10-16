import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanReduceComponent } from './scan-reduce.component';

describe('ScanReduceComponent', () => {
  let component: ScanReduceComponent;
  let fixture: ComponentFixture<ScanReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

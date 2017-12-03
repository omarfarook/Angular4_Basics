import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfConditionComponent } from './if-condition.component';

describe('IfConditionComponent', () => {
  let component: IfConditionComponent;
  let fixture: ComponentFixture<IfConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

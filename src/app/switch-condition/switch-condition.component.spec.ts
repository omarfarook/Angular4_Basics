import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchConditionComponent } from './switch-condition.component';

describe('SwitchConditionComponent', () => {
  let component: SwitchConditionComponent;
  let fixture: ComponentFixture<SwitchConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

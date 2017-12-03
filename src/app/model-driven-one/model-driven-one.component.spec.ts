import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenOneComponent } from './model-driven-one.component';

describe('ModelDrivenOneComponent', () => {
  let component: ModelDrivenOneComponent;
  let fixture: ComponentFixture<ModelDrivenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { questionnairesComponent } from './questionnaires.component';

describe('questionnairesComponent', () => {
  let component: questionnairesComponent;
  let fixture: ComponentFixture<questionnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ questionnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(questionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

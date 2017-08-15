import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosGroupsComponent } from './todos-groups.component';

describe('TodosGroupsComponent', () => {
  let component: TodosGroupsComponent;
  let fixture: ComponentFixture<TodosGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPaneComponent } from './news-pane.component';

describe('NewsPaneComponent', () => {
  let component: NewsPaneComponent;
  let fixture: ComponentFixture<NewsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

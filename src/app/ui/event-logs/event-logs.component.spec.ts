import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogsComponent } from './event-logs.component';

describe('EventLogsComponent', () => {
  let component: EventLogsComponent;
  let fixture: ComponentFixture<EventLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

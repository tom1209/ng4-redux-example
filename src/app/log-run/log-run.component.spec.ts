import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRunComponent } from './log-run.component';

describe('LogRunComponent', () => {
  let component: LogRunComponent;
  let fixture: ComponentFixture<LogRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

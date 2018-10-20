import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagoftimeComponent } from './managoftime.component';

describe('ManagoftimeComponent', () => {
  let component: ManagoftimeComponent;
  let fixture: ComponentFixture<ManagoftimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagoftimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagoftimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

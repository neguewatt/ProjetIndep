import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasuComponent } from './sasu.component';

describe('SasuComponent', () => {
  let component: SasuComponent;
  let fixture: ComponentFixture<SasuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

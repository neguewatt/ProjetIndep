import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurlComponent } from './eurl.component';

describe('EurlComponent', () => {
  let component: EurlComponent;
  let fixture: ComponentFixture<EurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

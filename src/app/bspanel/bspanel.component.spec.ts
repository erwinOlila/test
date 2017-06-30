import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BspanelComponent } from './bspanel.component';

describe('BspanelComponent', () => {
  let component: BspanelComponent;
  let fixture: ComponentFixture<BspanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BspanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

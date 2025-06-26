import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoCincoComponent } from './mano-cinco.component';

describe('ManoCincoComponent', () => {
  let component: ManoCincoComponent;
  let fixture: ComponentFixture<ManoCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManoCincoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoTresComponent } from './mano-tres.component';

describe('ManoTresComponent', () => {
  let component: ManoTresComponent;
  let fixture: ComponentFixture<ManoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManoTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

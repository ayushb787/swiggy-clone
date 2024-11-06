import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestComponentComponent } from './best-component.component';

describe('BestComponentComponent', () => {
  let component: BestComponentComponent;
  let fixture: ComponentFixture<BestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

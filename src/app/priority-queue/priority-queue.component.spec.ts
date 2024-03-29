import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityQueueComponent } from './priority-queue.component';

describe('PriorityQueueComponent', () => {
  let component: PriorityQueueComponent;
  let fixture: ComponentFixture<PriorityQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTreeComponent } from './binary-tree.component';

describe('BinaryTreeComponent', () => {
  let component: BinaryTreeComponent;
  let fixture: ComponentFixture<BinaryTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinaryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

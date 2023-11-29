import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaComponentComponent } from './fruta-component.component';

describe('FrutaComponentComponent', () => {
  let component: FrutaComponentComponent;
  let fixture: ComponentFixture<FrutaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrutaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

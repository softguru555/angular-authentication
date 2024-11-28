import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredFeatComponent } from './secured-feat.component';

describe('SecuredFeatComponent', () => {
  let component: SecuredFeatComponent;
  let fixture: ComponentFixture<SecuredFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuredFeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuredFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftStorageNavComponent } from './left-storage-nav.component';

describe('LeftStorageNavComponent', () => {
  let component: LeftStorageNavComponent;
  let fixture: ComponentFixture<LeftStorageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftStorageNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftStorageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

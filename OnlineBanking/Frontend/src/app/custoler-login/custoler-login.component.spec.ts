import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustolerLoginComponent } from './custoler-login.component';

describe('CustolerLoginComponent', () => {
  let component: CustolerLoginComponent;
  let fixture: ComponentFixture<CustolerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustolerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustolerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDeclaration } from './cookie-declaration';

describe('CookieDeclaration', () => {
  let component: CookieDeclaration;
  let fixture: ComponentFixture<CookieDeclaration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieDeclaration],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieDeclaration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

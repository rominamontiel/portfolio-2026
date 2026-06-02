import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitle } from './section-title';

describe('TitleSection', () => {
  let component: SectionTitle;
  let fixture: ComponentFixture<SectionTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTitle);
    fixture.componentRef.setInput('title', 'Title');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

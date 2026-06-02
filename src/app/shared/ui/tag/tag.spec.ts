import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tag } from './tag';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';

describe('Tag', () => {
  let component: Tag;
  let fixture: ComponentFixture<Tag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tag],
    }).compileComponents();

    fixture = TestBed.createComponent(Tag);
    fixture.componentRef.setInput('tagName', 'Tag');
    fixture.componentRef.setInput('hierarchy', HiearchyUi.PRIMARY);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

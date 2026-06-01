import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon } from './icon';
import { Icons } from '@core/constants/icons.constant';
import { Colors } from '@core/constants/colors.constants';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);

    fixture.componentRef.setInput('iconName', Icons.ARROW_DOWN);
    fixture.componentRef.setInput('iconSize', 24);
    fixture.componentRef.setInput('iconColor', Colors.WHITE);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

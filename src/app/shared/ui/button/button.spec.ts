import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';
import { ButtonConfig } from '@core/models/button.interface';
import { Icons } from '@core/constants/icons.constant';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  const mockInputConfig: ButtonConfig = {
    text: 'Button',
    icon: Icons.ARROW_DOWN,
    hierarchy: HiearchyUi.PRIMARY,
    size: 40,
    onlyIcon: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);

    fixture.componentRef.setInput('config', mockInputConfig);

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

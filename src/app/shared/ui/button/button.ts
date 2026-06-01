import { Component, input } from '@angular/core';
import { ButtonConfig } from '@core/models/button.interface';
import { Icon } from '../icon/icon';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';
import { Colors } from '@core/constants/colors.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rm-button',
  imports: [Icon, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public config = input.required<ButtonConfig>();

  public get iconColor(): Colors {
    switch (this.config().hierarchy) {
      case HiearchyUi.PRIMARY:
        return Colors.WHITE;
      case HiearchyUi.SPECIAL:
        return Colors.WHITE;
      case HiearchyUi.SECONDARY:
        return Colors.PRIMARY_500;
      case HiearchyUi.TERTIARY:
        return Colors.GREY_600;
      default:
        return Colors.WHITE;
    }
  }
}

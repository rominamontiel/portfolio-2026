import { Component, input } from '@angular/core';
import { Colors } from '@core/constants/colors.constants';
import { Icons } from '@core/constants/icons.constant';
import { IconSizes } from '@core/models/icon.interface';

@Component({
  selector: 'rm-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  public iconName = input.required<Icons>();
  public iconSize = input.required<IconSizes>();
  public iconColor = input.required<Colors>();
}

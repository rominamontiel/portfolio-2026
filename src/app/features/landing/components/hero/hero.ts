import { Component } from '@angular/core';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';
import { Icons } from '@core/constants/icons.constant';
import { ButtonConfig } from '@core/models/button.interface';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'rm-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  public buttonLearnMore: ButtonConfig = {
    text: 'Conocer más',
    icon: Icons.ARROW_DOWN,
    hierarchy: HiearchyUi.SPECIAL,
    size: 40,
    onlyIcon: false,
  };
}

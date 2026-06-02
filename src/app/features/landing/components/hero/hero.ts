import { Component } from '@angular/core';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';
import { Icons } from '@core/constants/icons.constant';
import { SectionTitles } from '@core/constants/sections.constants';
import { ButtonConfig } from '@core/models/button.interface';
import { Button } from '@shared/ui/button/button';
import { scrollToSection } from '@shared/utils/scroll-to-id.utils';

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
  public sectionTitles = SectionTitles;

  public handleScroll(id: SectionTitles): void {
    scrollToSection(id);
  }
}

import { Component, input } from '@angular/core';
import { SECTION_TITLES } from '@core/constants/sections.constants';
import { slugify } from '@shared/utils/string.utils';

@Component({
  selector: 'rm-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeSection = input<SECTION_TITLES | undefined>(SECTION_TITLES.EXPERIENCE);

  public readonly sectionList = Object.values(SECTION_TITLES);

  public normalizeText(text: string): string {
    return slugify(text);
  }
}

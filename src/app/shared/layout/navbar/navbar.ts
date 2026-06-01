import { Component, input } from '@angular/core';
import { SectionTitles } from '@core/constants/sections.constants';
import { slugify } from '@shared/utils/string.utils';

@Component({
  selector: 'rm-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public activeSection = input<SectionTitles | undefined>(SectionTitles.EXPERIENCE);

  public readonly sectionList = Object.values(SectionTitles);

  public normalizeText(text: string): string {
    return slugify(text);
  }
}

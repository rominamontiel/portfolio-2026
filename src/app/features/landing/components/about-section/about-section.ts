import { Component } from '@angular/core';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';
import { SectionTitles, SectionTitlesId } from '@core/constants/sections.constants';
import { SectionTitle } from '@shared/ui/section-title/section-title';
import { Tag } from '@shared/ui/tag/tag';

@Component({
  selector: 'rm-about-section',
  imports: [SectionTitle, Tag],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  public titleSection = SectionTitles;
  public titleSectionId = SectionTitlesId;
  public tagList = [
    'Typescript',
    'RxJs',
    'Signals',
    'Standalone Components',
    'Unit tests',
    'Karma/Jasmine',
    'Vitest',
    'Lazy Loading',
    'GIT',
    'Figma',
    'Atomic Design',
    'Autolayout',
  ];
  public tagsHiearchy = HiearchyUi;
}

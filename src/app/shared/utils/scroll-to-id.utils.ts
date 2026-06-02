import { SECTION_TITLE_TO_ID, SectionTitles } from '@core/constants/sections.constants';

export function scrollToSection(id: SectionTitles): void {
  const ID = SECTION_TITLE_TO_ID[id];
  const EL: HTMLElement | null = document.getElementById(ID);
  if (EL) EL.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

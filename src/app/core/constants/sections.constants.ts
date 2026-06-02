export enum SectionTitles {
  ABOUT = 'Sobre mí',
  PROJECTS = 'Proyectos',
  EXPERIENCE = 'Experiencia',
  EDUCATION = 'Formación',
  CONTACT = 'Contacto',
}

export enum SectionTitlesId {
  ABOUT = 'about',
  PROJECTS = 'project',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact',
}

export const SECTION_TITLE_TO_ID: Record<SectionTitles, SectionTitlesId> = {
  [SectionTitles.ABOUT]: SectionTitlesId.ABOUT,
  [SectionTitles.PROJECTS]: SectionTitlesId.PROJECTS,
  [SectionTitles.EXPERIENCE]: SectionTitlesId.EXPERIENCE,
  [SectionTitles.EDUCATION]: SectionTitlesId.EDUCATION,
  [SectionTitles.CONTACT]: SectionTitlesId.CONTACT,
};

import { Component } from '@angular/core';
import { AboutSection } from '@features/landing/components/about-section/about-section';
import { ContactSection } from '@features/landing/components/contact-section/contact-section';
import { EducationSection } from '@features/landing/components/education-section/education-section';
import { ExperienceSection } from '@features/landing/components/experience-section/experience-section';
import { Hero } from '@features/landing/components/hero/hero';
import { ProjectsSection } from '@features/landing/components/projects-section/projects-section';
import { Footer } from '@shared/layout/footer/footer';
import { Navbar } from '@shared/layout/navbar/navbar';

@Component({
  selector: 'rm-landing-page',
  imports: [
    Navbar,
    Hero,
    AboutSection,
    ProjectsSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    Footer,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export default class LandingPage {}

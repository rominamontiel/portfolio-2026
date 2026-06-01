import { Component } from '@angular/core';
import { Hero } from '@features/landing/components/hero/hero';
import { Footer } from '@shared/layout/footer/footer';
import { Navbar } from '@shared/layout/navbar/navbar';

@Component({
  selector: 'rm-landing-page',
  imports: [Navbar, Hero, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export default class LandingPage {}

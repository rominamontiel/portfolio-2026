import { Component, input } from '@angular/core';

@Component({
  selector: 'rm-title-section',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
  public title = input.required<string>();
}

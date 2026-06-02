import { Component, input } from '@angular/core';
import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';

@Component({
  selector: 'rm-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  public tagName = input.required<string>();
  public hierarchy = input.required<HiearchyUi>();
}

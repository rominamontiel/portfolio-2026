import { HiearchyUi } from '@core/constants/hiearchy-ui.constant';
import { Icons } from '@core/constants/icons.constant';

export interface ButtonConfig {
  text: string;
  icon: Icons;
  hierarchy: HiearchyUi;
  size: SizeButton;
  onlyIcon: boolean;
}

export type SizeButton = 32 | 40 | 48;

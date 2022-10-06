import * as jest from "jest-mock";
window.jest = jest;

import '../stories/assets/styles/tailwind.css';
import '../assets/scss/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import * as SolidPro from "../libs/vue-fontawesome/src/solid-pro";
import * as SolidFree from '../libs/vue-fontawesome/src/solid-free';
import * as RegularPro from '../libs/vue-fontawesome/src/regular-pro';
import * as DuotonePro from '../libs/vue-fontawesome/src/duotone-pro';
import * as LightPro from '../libs/vue-fontawesome/src/light-pro';

library.add(SolidPro, SolidFree, RegularPro, DuotonePro, LightPro);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
  },
  backgrounds: {
    values: [
      { name: 'Gray', value: '#F5F7FF' },
      { name: 'White', value: '#FFF' },
    ],
    default: "Gray",
  },
}
import * as jest from "jest-mock";
window.jest = jest;

import '../stories/assets/styles/tailwind.css';

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
  },
}
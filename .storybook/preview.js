import * as jest from "jest-mock";
window.jest = jest;
import { app } from '@storybook/vue3';

import '../assets/scss/index.scss';
import '../stories/assets/styles/tailwind.css';

import { vueFontawesome } from '../libs/vue-fontawesome/index';
vueFontawesome(app);

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
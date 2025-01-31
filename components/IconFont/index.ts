import { IconPack, library } from '@fortawesome/fontawesome-svg-core';

import * as SolidPro from './src/fas-solid-pro';
import * as SolidFree from './src/fas-solid-free';
import * as RegularPro from './src/far-regular-pro';
import * as DuotonePro from './src/fad-duotone-pro';
import * as LightPro from './src/fal-light-pro';
import * as BrandsFree from './src/fab-free';

library.add(
  SolidPro as IconPack,
  SolidFree as IconPack,
  RegularPro as IconPack,
  DuotonePro as IconPack,
  LightPro as IconPack,
  BrandsFree as IconPack
);


import GIcon from './Icon.vue'

export { GIcon }
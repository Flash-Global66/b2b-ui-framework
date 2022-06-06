import { Meta } from '@storybook/vue3';
import { Pill } from '../../components/Pill';

// CONSTANTS
import { Grouping } from '../../constants/grouping';

export default {
  title: `${Grouping.Data}/Pill`,
  component: Pill,
} as Meta<typeof Pill>;

export { Error, Normal, Success } from './Pill.variants'


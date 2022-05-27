import { Meta } from '@storybook/vue3';
import { Pill } from '../../components/Pill';

export default {
  component: Pill,
} as Meta<typeof Pill>;

export { Error, Normal, Success } from './Pill.variants'


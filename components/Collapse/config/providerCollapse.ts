import { InjectionKey, ref, Ref } from 'vue';

export type GCollapse = {
  active: Ref<number | string | null>;
  count: Ref<number>;
  accordion: Ref<boolean>;
  disabled: Ref<boolean>;
  preventDefault: Ref<boolean>;
  setActiveItem: (item: string | number | null, visible: boolean) => void;
};

export const initialGCollapse: GCollapse = {
  active: ref(null),
  count: ref(0),
  accordion: ref(false),
  disabled: ref(false),
  preventDefault: ref(false),
  setActiveItem: () => console.log,
};

export const ProviderGCollapse: InjectionKey<GCollapse> =
  Symbol('GCollapse');

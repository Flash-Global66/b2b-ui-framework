import { InjectionKey, Ref, ref } from 'vue';

export type LoaderProvider = {
  showGLoader(show: boolean): void;
  isLoading: Ref<boolean>;
};

export const initialValuesLoaderProvider: LoaderProvider = {
  showGLoader: (show: boolean) => console.log(show),
  isLoading: ref(false),
};

const LoaderProvider: InjectionKey<LoaderProvider> = Symbol('loader');

export default LoaderProvider;

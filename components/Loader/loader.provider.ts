import { InjectionKey, Ref, ref } from 'vue';

export type LoaderProviderType = {
  showGLoader(show: boolean): void;
  isLoading: Ref<boolean>;
};

const initialValuesLoaderProvider: LoaderProviderType = {
  showGLoader: (show: boolean) => console.log(show),
  isLoading: ref(false),
};

const LoaderProvider: InjectionKey<LoaderProviderType> = Symbol('loader');

export {LoaderProvider, initialValuesLoaderProvider};

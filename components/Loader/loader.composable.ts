import { inject } from "vue";
import { initialValuesLoaderProvider, LoaderProvider } from "./loader.provider";

const useLoader = () => {
  const { showGLoader, isLoading } = inject(
    LoaderProvider,
    initialValuesLoaderProvider
  );

  return {
    showGLoader,
    isLoading,
  };
}

export default useLoader;
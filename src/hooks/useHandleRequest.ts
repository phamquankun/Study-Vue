import { useLoadingStore } from "@/stores/loading";

export const useHandleRequest = () => {
  const isLoading = useLoadingStore();
  const handleRequest = async (promise: Promise<any>) => {
    isLoading.toggleLoading(true);
    try {
      const res = await promise;
      return res;
    } catch (error) {
      return error;
    } finally {
      isLoading.toggleLoading(false);
    }
  };

  return { handleRequest };
};

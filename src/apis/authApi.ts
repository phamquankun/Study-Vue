import { useHandleRequest } from "@/hooks/useHandleRequest";
import type { AuthReponse } from "@/models";
import axios from "axios";

export const useAuthApi = () => {
  const { handleRequest } = useHandleRequest();

  const getUsers = (): Promise<AuthReponse> => {
    const url = "/users";
    return handleRequest(axios.get(url));
  };
  const getA = () => {
    return "ABCED";
  };
  return { getUsers, getA };
};

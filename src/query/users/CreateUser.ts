// hooks/users/useCreateUser.ts
import { createUser } from "@/services/user/fatchCreateNewUser";
import { useMutation } from "@tanstack/react-query";

const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

export default useCreateUser;

import { UpdateUser, UserUpdate } from "@/services/user/fatchPutUsers";
import { useMutation } from "@tanstack/react-query";

// Define the type for the mutation function argument
interface UpdateUserArgs {
  id: number;
  user: UserUpdate;
}

const useUpdateUser = () => {
  return useMutation<void, Error, UpdateUserArgs>({
    mutationFn: ({ id, user }: UpdateUserArgs) => UpdateUser(id, user),
  });
};

export default useUpdateUser;
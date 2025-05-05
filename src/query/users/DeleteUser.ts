import { deleteUser } from "@/services/user/fatchDeleteUser";
import { useMutation } from "@tanstack/react-query";

const useDeleteUser = () => {
    return useMutation({
        mutationFn: deleteUser
    });
};

export default useDeleteUser;
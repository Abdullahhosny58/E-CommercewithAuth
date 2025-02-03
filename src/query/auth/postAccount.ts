import { postSignUp } from "@/services/auth/SignUp/postSignUp";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
    return useMutation({
        mutationFn: postSignUp,
    });
};

export default useRegister;

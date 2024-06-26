import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

import { firebaseAuth } from "@utils/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export default function useGoogleLogin(props = {}) {
  const { onError, onSuccess } = props;

  const { isPending, mutate } = useMutation({
    mutationFn: () => signInWithPopup(firebaseAuth, provider),
    onError: (error) => {
      toast.error(error?.code);
      onError(error);
    },
    onSuccess,
  });

  return {
    isLoggingInWithGoogle: isPending,
    loginWithGoogle: mutate,
  };
}

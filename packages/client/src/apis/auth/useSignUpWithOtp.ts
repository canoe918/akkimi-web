import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import useSupabaseBrowser from "../supabase/supabase-browser";
import AuthApi from "./auth.api";

export default function useSignUpWithOtp() {
  const supabase = useSupabaseBrowser();

  const mutationFn = async (credentials: SignUpWithPasswordCredentials) => {
    return await AuthApi(supabase).signInWithOtp(credentials);
  };

  return useMutation({ mutationFn });
}

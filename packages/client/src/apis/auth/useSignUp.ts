import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import useSupabaseBrowser from "../supabase/supabase-browser";
import AuthApi from "./auth.api";

export default function useSignUp() {
  const supabase = useSupabaseBrowser();

  const mutationFn = async (credentials: SignUpWithPasswordCredentials) => {
    return AuthApi(supabase)
      .signUp(credentials)
      .then((result) => result.data);
  };

  return useMutation({ mutationFn });
}

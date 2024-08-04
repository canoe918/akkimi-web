import { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import useSupabaseBrowser from "../supabase/supabase-browser";
import AuthApi from "./auth.api";

export default function useSignIn() {
  const supabase = useSupabaseBrowser();

  const mutationFn = async (credentials: SignInWithPasswordCredentials) => {
    return await AuthApi(supabase).signIn(credentials);
  };

  return useMutation({ mutationFn });
}

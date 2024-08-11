import {
  SignInWithPasswordCredentials,
  SignInWithPasswordlessCredentials,
  SignUpWithPasswordCredentials,
  SupabaseClient,
} from "@supabase/supabase-js";
import { Database } from "../models/database.types";
import { TypedSupabaseClient } from "../supabase/supabase.type";

const AuthApi = (supabase: TypedSupabaseClient | SupabaseClient<Database>) => {
  const signUp = async (credentials: SignUpWithPasswordCredentials) => {
    return await supabase.auth.signUp(credentials);
  };

  const signIn = async (credentials: SignInWithPasswordCredentials) => {
    return await supabase.auth.signInWithPassword(credentials);
  };

  const signInWithOtp = async (
    credentials: SignInWithPasswordlessCredentials,
  ) => {
    return await supabase.auth.signInWithOtp(credentials);
  };
  // verifyOtp: async (params: VerifyOtpParams) => {
  //   return await supabase.auth.verifyOtp(params);
  // },
  // resetPasswordForEmail: async (
  //   email: string,
  //   options: {
  //     redirectTo?: string;
  //     captchaToken?: string;
  //   } = {},
  // ) => {
  //   return await supabase.auth.resetPasswordForEmail(email, options);
  // },
  // signOut: async (options: SignOut = { scope: "global" }) => {
  //   return await supabase.auth.signOut(options);
  // },
  // inviteUserByEmail: async (
  //   email: string,
  //   options: {
  //     /** A custom data object to store additional metadata about the user. This maps to the `auth.users.user_metadata` column. */
  //     data?: object;

  //     /** The URL which will be appended to the email link sent to the user's email address. Once clicked the user will end up on this URL. */
  //     redirectTo?: string;
  //   } = {},
  // ) => {
  //   return await supabase.auth.admin.inviteUserByEmail(email, options);
  // },
  return {
    signUp,
    signIn,
    signInWithOtp,
  };
};

export default AuthApi;

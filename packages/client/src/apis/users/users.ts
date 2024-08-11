import { supabase } from "../supabase/supabase";

export async function getUsers() {
  return await supabase.from("users").select("username");
}

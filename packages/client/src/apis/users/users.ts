import { supabase } from "../supabase";

export async function getUsers() {
  return await supabase.from("users").select("*")
}
import { SUPABASE_API_KEY, SUPABASE_URL } from "@/libs/const/env.const";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./models/database.types";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY);

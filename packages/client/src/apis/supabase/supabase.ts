import { BASE_API_URL, SUPABASE_API_KEY } from "@/libs/const/env.const";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../models/database.types";

export const supabase = createClient<Database>(BASE_API_URL, SUPABASE_API_KEY);

import { createClient } from "@supabase/supabase-js";
import { Database } from "./models/database.types";

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!,
);

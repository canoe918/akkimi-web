import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../models/database.types";

export type TypedSupabaseClient = SupabaseClient<Database>;

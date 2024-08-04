import { createBrowserClient } from "@supabase/ssr";
import { useMemo } from "react";

import { Database } from "@/apis/models/database.types";
import { TypedSupabaseClient } from "@/apis/supabase/supabase.type";
import { BASE_API_URL, SUPABASE_API_KEY } from "@/libs/const/env.const";

let client: TypedSupabaseClient | undefined;

function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(BASE_API_URL, SUPABASE_API_KEY);

  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;

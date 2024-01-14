import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { supabase } from "./supabaseClient";

function createSupabase() {
  const cookiesStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookiesStore.get(name)?.value;
        },
      },
    }
  );
}

export const supabaseServer = createSupabase();

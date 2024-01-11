import { createServerClient } from "@supabase/ssr";
import next from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("next");
  const cookiesStore = cookies();

  const supabse = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookies.get(name)?.value;
        },
        set(name, value, options) {
          cookiesStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookiesStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  if (token_hash && type) {
    const { error } = await supabse.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(next);
    }
  }

  return NextResponse.redirect("/error");
}

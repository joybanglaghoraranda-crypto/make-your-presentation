// Supabase Client Wrapper with Graceful Offline Fallback

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL.startsWith("http")
  );
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  // When configured with valid credentials, real supabase client will be returned
  try {
    // Dynamic import to prevent bundler errors if not installed
    const { createClient } = require("@supabase/supabase-js");
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  } catch {
    return null;
  }
}

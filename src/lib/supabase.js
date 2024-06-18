import { createClient } from "@supabase/supabase-js";
import { VITE_PUBLIC_SUPABASE_URL, VITE_PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

const supabaseUrl = VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = VITE_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
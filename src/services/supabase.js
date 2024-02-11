import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lustegvvzmmcppzedesw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1c3RlZ3Z2em1tY3BwemVkZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODkyNTMsImV4cCI6MjAyMzA2NTI1M30.ZXugRm_ZiJerAQvuQ6RP5AdvqycL2qFED4bqD3lrA2I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

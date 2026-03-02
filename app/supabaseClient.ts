import { createClient } from '@supabase/supabase-js';

// Hardcoding your keys for a 100% guaranteed connection
const supabaseUrl = 'https://nizhdjazmqjadjpdgqtb.supabase.co';
const supabaseAnonKey = 'sb_publishable_JkzPREJArx8oImxhYRo6UA_M2LEwJYl';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
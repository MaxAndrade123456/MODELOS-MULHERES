import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mwghndcjjxrxumodpjxl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_rvW_lZ6xXGPD08EwAz0MjQ_nohjSDzV';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { supabase } from './supabase';

export async function fetchDriverDetails(driver_id: string) {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('id', driver_id)
    .maybeSingle();

  return { data, error };
}

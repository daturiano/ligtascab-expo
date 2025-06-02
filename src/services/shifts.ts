import { supabase } from './supabase';

export async function fetchDriverDetails(driver_id: string) {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('id', driver_id)
    .maybeSingle();

  return { data, error };
}

export async function fetchAllAvailableTricycles() {
  const { data, error } = await supabase
    .from('tricycles_sample')
    .select('plate_number, registration_expiration')
    .eq('status', 'inactive');

  return { data, error };
}

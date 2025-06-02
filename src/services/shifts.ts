import { ShiftLog } from '../types';
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

export const createShiftLog = async (newLog: ShiftLog): Promise<boolean> => {
  const { error } = await supabase.from('sample_shifts').insert([newLog]).select().single();

  if (error) {
    console.error('Error inserting log:', error);
    return false;
  }

  return true;
};

export const fetchAllShiftLogs = async () => {
  const { data } = await supabase
    .from('sample_shifts')
    .select('*')
    .order('created_at', { ascending: false });

  return { data: data || [] };
};

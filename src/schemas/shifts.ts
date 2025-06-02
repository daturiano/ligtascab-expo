import { z } from 'zod/v4';

export const ShiftSchema = z.object({
  driver_name: z.string(),
  plate_number: z.string(),
  shift_type: z.string(),
  driver_id: z.string(),
});

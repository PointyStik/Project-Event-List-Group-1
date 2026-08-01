import { z } from 'zod';

export const createEventSchema = z.object({
   name: z.string().min(1, 'Event name is required'),
   description: z.string().min(1, 'Description is required'),
   date: z.string().datetime('Valid date and time is required'),
   location: z.string().min(1, 'Location is required'),
   registrationLink: z.string().url('Valid registration link is required'),
});

export const updateEventSchema = z.object({
   name: z.string().min(1, 'Event name is required').optional(),
   description: z.string().min(1, 'Description is required').optional(),
   date: z.string().datetime('Valid date and time is required').optional(),
   location: z.string().min(1, 'Location is required').optional(),
   registrationLink: z.string().url('Valid registration link is required').optional(),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;

import type { Request, Response } from 'express';
import { createEventSchema, updateEventSchema } from './events.schema.js';
import * as eventRepository from './events.repository.js';

export const createEvent = async (req: Request, res: Response) => {
   const validation = createEventSchema.safeParse(req.body);

   if (!validation.success) {
      return res.status(400).json({ error: validation.error });
   }

   const event = await eventRepository.createEvent(validation.data);

   return res.status(201).json({
      message: 'Event created successfully',
      data: event,
   });
};

export const getAllEvents = async (req: Request, res: Response) => {
   const locationCategory = typeof req.query.locationCategory === 'string' ? req.query.locationCategory : undefined;
   const events = await eventRepository.getAllEvents(locationCategory);
   return res.status(200).json({ data: events });
};

export const getEventById = async (req: Request, res: Response) => {
   const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
   const event = await eventRepository.getEventById(id);

   if (!event) {
      return res.status(404).json({ error: 'Event not found' });
   }

   return res.status(200).json({ data: event });
};

export const updateEvent = async (req: Request, res: Response) => {
   const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
   const validation = updateEventSchema.safeParse(req.body);

   if (!validation.success) {
      return res.status(400).json({ error: validation.error });
   }

   const event = await eventRepository.getEventById(id);

   if (!event) {
      return res.status(404).json({ error: 'Event not found' });
   }

   const updatedEvent = await eventRepository.updateEvent(id, validation.data);

   return res.status(200).json({
      message: 'Event updated successfully',
      data: updatedEvent,
   });
};

export const deleteEvent = async (req: Request, res: Response) => {
   const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
   const event = await eventRepository.getEventById(id);

   if (!event) {
      return res.status(404).json({ error: 'Event not found' });
   }

   await eventRepository.deleteEvent(id);

   return res.status(200).json({
      message: 'Event deleted successfully',
   });
};

import { PrismaClient } from '@prisma/client';
import type { CreateEventInput, UpdateEventInput } from './events.schema.js';

const prisma = new PrismaClient();

export const createEvent = async (data: CreateEventInput) => {
   return await prisma.event.create({
      data: {
         name: data.name,
         description: data.description,
         date: new Date(data.date),
         location: data.location,
         locationCategory: data.locationCategory,
         registrationLink: data.registrationLink,
         price: data.price,
         imageUrl: data.imageUrl,
      },
   });
};

export const getAllEvents = async (locationCategory?: string) => {
   return await prisma.event.findMany({
      where: locationCategory ? { locationCategory } : undefined,
      orderBy: { date: 'asc' },
   });
};

export const getEventById = async (id: string) => {
   return await prisma.event.findUnique({
      where: { id },
   });
};

export const updateEvent = async (id: string, data: UpdateEventInput) => {
   return await prisma.event.update({
      where: { id },
      data: {
         ...(data.name && { name: data.name }),
         ...(data.description && { description: data.description }),
         ...(data.date && { date: new Date(data.date) }),
         ...(data.location && { location: data.location }),
         ...(data.locationCategory && { locationCategory: data.locationCategory }),
         ...(data.registrationLink && { registrationLink: data.registrationLink }),
         ...(data.price !== undefined && { price: data.price }),
         ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
      },
   });
};

export const deleteEvent = async (id: string) => {
   return await prisma.event.delete({
      where: { id },
   });
};

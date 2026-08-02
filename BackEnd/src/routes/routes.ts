import express from 'express';
import type { Request, Response, Router } from 'express';
import eventsRoutes from '@/features/events/events.routes.js';

const router: Router = express.Router();

router.get('/health', (_req: Request, res: Response) => {
   res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
   });
});

router.use('/events', eventsRoutes);

export default router;

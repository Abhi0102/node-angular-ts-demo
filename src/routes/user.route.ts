import logger from '../config/logger';
import { Router, RequestHandler } from 'express';
import { config } from '../config/azureConfig';
import axios from 'axios';

const router = Router();

router.route('/v1/:id').get((async (req, res, next) => {
  logger.info(config);
  logger.error('On route v1');
  if (!req.params.id) {
    return next(new Error());
  }
  await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
  res.status(200).json({ success: true, message: 'Successfully accessed' });
}) as RequestHandler);

export default router;

import logger from '../config/logger';
import { Router } from 'express';
import { config } from '../config/azureConfig';
import axios from 'axios';

const router = Router();

router.route('/v1/:id').get(async (req, res) => {
  logger.info(config);
  logger.error('On route v1');
  await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
  res.status(200).json({ success: true, message: 'Successfully accessed' });
});

export default router;

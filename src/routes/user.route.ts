import logger from '../config/logger';
import { Router } from 'express';
import { config } from '../config/azureConfig';

const router = Router();

router.route('/v1').get((req, res) => {
  //   console.log(req);
  logger.info(config);
  logger.error('On route v1');
  res.status(200).json({ success: true, message: 'Successfully accessed' });
});

export default router;

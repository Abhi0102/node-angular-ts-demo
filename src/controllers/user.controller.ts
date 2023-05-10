import logger from '../config/logger';

export const add = (a: number, b: number) => {
  logger.error('On route v1');

  return a + b;
};

export const sub = (a: number, b: number) => {
  return a - b;
};

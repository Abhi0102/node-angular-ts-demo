import dotenv from 'dotenv';
import app from './app';
// import { AppConfigurationClient } from '@azure/app-configuration';
import logger from './config/logger';

// const client = new AppConfigurationClient(process.env.AZURE || '');
// async function test() {
//   const result = client.listConfigurationSettings();
//   for await (const setting of result) {
//     logger.info(`  Found key: ${setting.key}, value: ${setting.value}`);
//   }
// }

// test();
dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  logger.info('Hey there');
  logger.info(`App is running on ${port}`);
});

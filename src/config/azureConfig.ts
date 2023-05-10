import { AppConfigurationClient } from '@azure/app-configuration';
import logger from './logger';

export const config: { [key: string]: string | undefined } = {};

export async function loadConfig() {
  const client = new AppConfigurationClient(process.env.AZURE || '');
  const result = client.listConfigurationSettings();
  for await (const setting of result) {
    config[setting.key] = setting.value;
    logger.info(`Found key: ${setting.key}, value: ${setting.value}`);
  }
}

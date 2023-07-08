import { HttpModuleOptions } from '@nestjs/axios';

import { ConfigService } from '@nestjs/config';

export const getAxiosConfig = async (
  ConfigService: ConfigService,
): Promise<HttpModuleOptions> => ({
  timeout: ConfigService.get('HTTP_TIMEOUT'),
  timeoutErrorMessage: ConfigService.get('HTTP_TIMEOUT_ERROR'),
});

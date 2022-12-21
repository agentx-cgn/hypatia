import { InjectionToken } from '@angular/core';
import { IConfig } from './interfaces';

export const APP_CONFIG = new InjectionToken<IConfig>('app-config');

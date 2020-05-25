'use strict';
import { Router } from 'express';
import * as controller from './controller';
const route = new Router();

route.get('/healthz', controller.healthCheck);

export default route;

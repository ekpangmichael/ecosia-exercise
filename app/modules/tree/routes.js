'use strict';
import { Router } from 'express';
import * as controller from './controller';
const route = new Router();

route.get('/tree', controller.getTree);

export default route;

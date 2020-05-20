import express from 'express';
import middlewares from './app/routes/middleware';
import route from './app/routes';
import config from './app/config/index';

const app = express();

    middlewares(app);
    route(app);
    app.listen(config.PORT,(err)=>{
        if(err) throw err;
        console.log(`======Connection started on ${config.PORT}`);
    });


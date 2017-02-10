import express from "express";
import config from './config';
import nunjucks from 'nunjucks';
// import router from './router';
import indexRouter from './routes/index';
import advertRouter from './routes/advert';

import bodyparse from './middleware/bodyparse'
import errLog from './middleware/error_log'


const app = express();

app.use("/node_modules",express.static(config.node_modules_path))
app.use("/public",express.static(config.publicPath))

nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
  noCache: true
})

app.use(bodyparse)

app.use(indexRouter);
app.use(advertRouter);

app.use(errLog)


app.listen(3000,function(){
    console.log('running at 3000');
})
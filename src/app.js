import express from "express";
import config from './config';
import nunjucks from 'nunjucks';
import querystring from 'querystring';
// import router from './router';
import index from './routes/index';
import advert from './routes/advert';


const app = express();

app.use("/node_modules",express.static(config.node_modules_path))
app.use("/public",express.static(config.publicPath))

nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app
})

app.use( (req,res,next) => {
    let data = ''
    req.on('data',chunk => {
        data += chunk
    })
    req.on('end',() => {
        req.body = querystring.parse(data)
        next()
    })
})

app.use(index);
app.use(advert);


app.listen(3000,function(){
    console.log('running at 3000');
})
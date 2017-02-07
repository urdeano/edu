import express from "express";
import config from './config';
const app = express();

app.use("/node_modules",express.static(config.node_modules_path))
app.use("/public",express.static(config.publicPath))

app.set("views",config.viewPath)
app.set('view engine', 'ejs')

app.get("/",function (req,res){
    res.render("index");
})

app.listen(3000,function(){
    console.log('running at 3000');
})
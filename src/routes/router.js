import express from 'express';

//创建一个路由器
const router = express.Router();

router.get("/",(req,res,next) => {
    res.render('index.html')
})

router.post('/advert/add',(req,res,next) => {
    console.log(req.body);
    
    res.end(JSON.stringify(req.body))
})

export default router
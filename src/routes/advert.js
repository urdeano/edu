import express from 'express'
import Advert from '../model/advert'

//创建一个路由容器
const router = express.Router()


//渲染广告列表页
router.get('/advert',(req,res,next) => {
    res.render('advert_list.html')
})
//渲染广告添加页
router.get('/advert/add',(req,res,next) => {
    res.render('advert_add.html')
})
//处理广告添加请求
router.post('/advert/add',(req,res,next) => {
    //接收表单数据
    const body = req.body;
    //操作数据库
    const advert = new Advert({
        title: body.title,
        image: body.image,
        link: body.link,
        start_time: body.start_time,
        end_time: body.end_time
    })

    advert.save((err,resault) => {
        if(err){
            return next(err)
        }
        res.json({
            err_code: 0
        })
    })
})

export default router
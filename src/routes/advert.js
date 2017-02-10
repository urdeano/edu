import express from 'express'

const router = express.Router()

router.post('/advert/add',(req,res,next) => {
    console.log(req.body);

    res.end(JSON.stringify(req.body))
})

router.get('/advert',(req,res,next) => {
    res.render('advert_list.html')
})

router.get('/advert/add',(req,res,next) => {
    res.render('advert_add.html')
})

export default router
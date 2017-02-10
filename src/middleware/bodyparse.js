import querystring from 'querystring';

export default (req, res, next) => {
    if ( req.method.toLowerCase()==="get" ) {
        console.log('进入 body-parser 了')
        return next()
    }
    let data = ''
    req.on('data', chunk => {
        data += chunk
    })
    req.on('end', () => {
        req.body = querystring.parse(data)
        next()
    })
}
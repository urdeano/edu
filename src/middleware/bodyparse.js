import querystring from 'querystring';

export default (req, res, next) => {
    if ( req.method.toLowerCase()==="get" ) {
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
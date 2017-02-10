import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/edu';

export default (error_log, req, res, next) => {

    MongoClient.connect(url, function (err, db) {
        db.collection('error_logs')
            .insertOne({
                name: error_log,
                message: error_log.message,
                stack: error_log.stack,
                time: new Date()
            }, (err, result) => {
                res.json({
                    err_code: 500,
                    message: errLog.message
                })
            })
        db.close();
    })
}
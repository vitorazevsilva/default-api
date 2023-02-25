const app = require('express')()
const knex = require('knex')
const cors = require('cors')
const winston = require('winston')
const consign = require('consign')

const knexfile = require('../knexfile')

app._frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5001'

app.use(cors())

app.db = knex(knexfile[process.env.NODE_ENV || 'production'])

app.logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ format: winston.format.json({ space: 1 }) }),
        new winston.transports.File({ filename: 'logs.log', level: 'warn', format: winston.format.combine(winston.format.timestamp(), winston.format.json({ space: 1 })) })
    ]
});

consign({ cwd: 'src', verbose: false })
    .include('./services')
    .include('./routes')
    .into(app)

app.use((err, req, res, next) => {
    const { name, message, stack } = err
    if (name != undefined) {
        const id = uuid()
        app.logger.error(`${id}:${name}\n${message}\n${stack}`)
        res.status(500).json({ id, error: 'System Error!' })
    }
})

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})

module.exports = app;
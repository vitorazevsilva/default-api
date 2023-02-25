module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            port: '6001',
            user: 'myUser',
            password: 'myPasswd',
            database: 'smartmoney'
        },
        debug: false,
        migrations: {
            directory: 'src/migrations/test'
        },
        poll: {
            min: 0,
            max: 50,
            propagateCreateError: false
        }
    },
    development: {
        client: process.env.DB_CLIENT || 'pg',
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            port: process.env.DB_PORT || '6001',
            user: process.env.DB_USER || 'myUser',
            password: process.env.DB_PASSWORD || 'myPasswd',
            database: process.env.DB_DATABASE || 'smartmoney'
        },
        debug: process.env.DB_DEBUG || false,
        migrations: {
            directory: process.env.DB_MIGRATIONS || 'src/migrations/development'
        },
        poll: {
            min: process.env.DB_POLL_MIN || 0,
            max: process.env.DB_POLL_MAX || 50,
            propagateCreateError: false
        }
    },
    production: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        },
        debug: process.env.DB_DEBUG || false,
        migrations: {
            directory: process.env.DB_MIGRATIONS || 'src/migrations/production'
        },
        poll: {
            min: process.env.DB_POLL_MIN || 0,
            max: process.env.DB_POLL_MAX || 50,
            propagateCreateError: false
        }
    }
}
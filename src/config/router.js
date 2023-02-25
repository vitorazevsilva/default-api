const secureRoute = require('express').Router()

module.exports = (app) => {
    // app.use('/',app.routes.base);
    // secureRoute.use('/secure', app.routes.secure);

    app.use('v1', app.config.passport.authenticate(), secureRoute);
}
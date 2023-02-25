const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')

const secret = 'mysecret' // change this to your own secret

module.exports = (app) => {

    const strategy = new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    }, (payload, done) => {
        // if valid = done(null, payload)
        // else done(err, false)
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false }),
    }
}
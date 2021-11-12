const auth = require('./auth.routes')

module.exports = [
    {
        route: auth,
        path: '/api/auth',
    },
]
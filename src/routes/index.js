const auth = require('./auth.routes')
const user = require('./user.routes')

module.exports = [
    {
        route: auth,
        path: '/api/auth',
    },
    {
        route: user,
        path: '/api/user',
    },
]
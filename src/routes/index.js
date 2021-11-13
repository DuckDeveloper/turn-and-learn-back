const auth = require('./auth.routes')
const user = require('./user.routes')
const card = require('./card.routes')

module.exports = [
    {
        route: auth,
        path: '/api/auth',
    },
    {
        route: user,
        path: '/api/user',
    },
    {
        route: card,
        path: '/api/card',
    }
]
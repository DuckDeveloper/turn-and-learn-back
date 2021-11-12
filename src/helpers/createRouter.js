const routes = require('../routes')

module.exports = (app) => routes.forEach(({ path, route }) => app.use(path, route))
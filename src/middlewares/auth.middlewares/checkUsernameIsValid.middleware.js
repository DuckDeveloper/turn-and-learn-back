const { MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH } = require('../../project.config.json')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { username } = req.body
        req.body.username = username.trim()

        if (
            username.trim().length < MIN_USERNAME_LENGTH
            || username.trim().length > MAX_USERNAME_LENGTH
            || !username.trim()
        ) {
            throw new Error()
        }

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}
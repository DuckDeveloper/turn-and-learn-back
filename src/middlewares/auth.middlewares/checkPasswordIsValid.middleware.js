const { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } = require('../../project.config.json')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { password } = req.body
        req.body.password = password.trim()

        if (
            password.trim().length < MIN_PASSWORD_LENGTH
            || password.trim().length > MAX_PASSWORD_LENGTH
        ) {
            throw new Error()
        }

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}
module.exports = async (req, res, next) => {
    try {
        const { login } = req.body
        req.body.login = login.trim()

        if (login.trim().length < 3 || login.trim().length > 11) throw new Error()

        req.body.loginLengthIsValid = true
    } catch(e) {
        req.body.loginLengthIsValid = false
    } finally {
        next()
    }
}
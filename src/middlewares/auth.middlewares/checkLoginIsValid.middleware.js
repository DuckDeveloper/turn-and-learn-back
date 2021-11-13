module.exports = async (req, res, next) => {
    try {
        const { login } = req.body
        req.body.login = login.trim()

        if (login.trim().length < 3 || login.trim().length > 11) throw new Error()

        req.loginLengthIsValid = true
    } catch(e) {
        req.loginLengthIsValid = false
    } finally {
        next()
    }
}
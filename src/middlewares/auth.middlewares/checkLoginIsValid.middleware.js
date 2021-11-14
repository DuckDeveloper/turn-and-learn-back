module.exports = async (req, res, next) => {
    try {
        const { login } = req.body
        req.body.login = login.trim()

        if (
            login.trim().length < 3
            || login.trim().length > 11
            || !login.trim()
        ) {
            throw new Error()
        }

        req.loginIsValid = true
    } catch(e) {
        req.loginIsValid = false
    } finally {
        next()
    }
}
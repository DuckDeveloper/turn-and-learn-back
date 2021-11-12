module.exports = async (req, res, next) => {
    try {
        const { password } = req.body
        req.body.password = password.trim()

        if (password.trim().length <= 8) throw new Error()

        req.body.passwordLengthIsValid = true
    } catch(e) {
        req.body.passwordLengthIsValid = false
    } finally {
        next()
    }
}
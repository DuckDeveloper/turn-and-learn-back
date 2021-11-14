module.exports = async (req, res, next) => {
    try {
        const { password } = req.body
        req.body.password = password.trim()

        if (password.trim().length <= 8) throw new Error()

        req.passwordIsValid = true
    } catch(e) {
        req.passwordIsValid = false
    } finally {
        next()
    }
}
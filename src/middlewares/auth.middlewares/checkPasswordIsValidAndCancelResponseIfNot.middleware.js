module.exports = async (req, res, next) => {
    try {
        const { password } = req.body
        req.body.password = password.trim()

        if (password.trim().length <= 8) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
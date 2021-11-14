module.exports = async (req, res, next) => {
    try {
        const { loginIsValid } = req

        if (!loginIsValid) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
module.exports = async (req, res, next) => {
    try {
        const { passwordIsValid } = req

        if (passwordIsValid) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
module.exports = async (req, res, next) => {
    try {
        const { tokenIsValid } = req

        if (!tokenIsValid) throw new Error()

        return next()
    } catch(e) {
        return res.status(401).json({})
    }
}
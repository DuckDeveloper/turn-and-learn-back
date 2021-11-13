module.exports = async (req, res, next) => {
    try {
        const { cardIsExist } = req

        if (!cardIsExist) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
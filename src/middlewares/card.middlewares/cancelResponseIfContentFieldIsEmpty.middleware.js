module.exports = async (req, res, next) => {
    try {
        const { fieldIsEmpty } = req

        if (!fieldIsEmpty) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
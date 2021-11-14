module.exports = async (req, res, next) => {
    try {
        const { foldersAmountIsValid } = req

        if (!foldersAmountIsValid) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
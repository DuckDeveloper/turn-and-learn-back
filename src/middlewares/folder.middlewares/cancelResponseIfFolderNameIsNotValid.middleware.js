module.exports = async (req, res, next) => {
    try {
        const { folderNameIsValid } = req

        if (!folderNameIsValid) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
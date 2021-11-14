module.exports = async (req, res, next) => {
    try {
        const { en, ru } = req.body

        if (!en || !ru) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
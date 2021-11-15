module.exports = async (req, res, next) => {
    try {
        const { en, ru } = req.body

        req.body.en = en.trim()
        req.body.ru = ru.trim()
        if (!en || !ru) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
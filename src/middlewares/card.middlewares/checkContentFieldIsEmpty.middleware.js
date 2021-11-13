module.exports = async (req, res, next) => {
    try {
        const { en, ru } = req.body

        if (!en || !ru) throw new Error()

        req.fieldIsEmpty = false
    } catch(e) {
        req.fieldIsEmpty = true
    } finally {
        next()
    }
}
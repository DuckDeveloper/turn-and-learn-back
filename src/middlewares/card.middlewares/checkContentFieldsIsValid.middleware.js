module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { cardFirstSide, cardSecondSide } = req.body

        req.body.cardFirstSide = cardFirstSide.trim()
        req.body.cardSecondSide = cardSecondSide.trim()
        if (!cardFirstSide || !cardSecondSide) throw new Error()

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}
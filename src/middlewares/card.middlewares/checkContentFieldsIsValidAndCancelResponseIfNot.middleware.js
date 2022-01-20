module.exports = async (req, res, next) => {
    try {
        const { cardFirstSide, cardSecondSide } = req.body

        req.body.cardFirstSide = cardFirstSide.trim()
        req.body.cardSecondSide = cardSecondSide.trim()
        if (!cardFirstSide || !cardSecondSide) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
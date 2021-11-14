module.exports = async (req, res, next) => {
    try {
        const { _limit: limitCardsOfPage, _page: pageNumber } = req.query

        if (limitCardsOfPage <= 0 || Number.isNaN(+limitCardsOfPage)) throw new Error()
        if (pageNumber <= 0 || Number.isNaN(+pageNumber)) throw new Error()

        req.limitCardsOfPage = limitCardsOfPage
        req.pageNumber = pageNumber
        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
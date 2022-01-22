module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { _limit: limitCardsOfPage, _page: pageNumber } = req.query

        if (limitCardsOfPage <= 0 || Number.isNaN(+limitCardsOfPage)) throw new Error()
        if (pageNumber <= 0 || Number.isNaN(+pageNumber)) throw new Error()

        req.limitCardsOfPage = limitCardsOfPage
        req.pageNumber = pageNumber

    } catch(e) {
        console.log(e)
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}
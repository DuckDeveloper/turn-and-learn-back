module.exports = async (req, res, next) => {
    const { cancelOptions } = req

    if (!cancelOptions) return next()

    const { responseStatusCode, responseBody } = cancelOptions

    res.status(responseStatusCode).json(responseBody)
}

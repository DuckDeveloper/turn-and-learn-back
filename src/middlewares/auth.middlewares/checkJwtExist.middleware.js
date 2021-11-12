module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()

        if (!token) throw new Error()

        req.body.token = token
        req.body.tokenIsExist = true
    } catch(e) {
        req.body.tokenIsExist = false
    } finally {
        next()
    }
}
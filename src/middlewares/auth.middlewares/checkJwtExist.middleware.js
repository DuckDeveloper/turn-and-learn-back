module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()

        if (!token) throw new Error()

        req.token = token
        req.tokenIsExist = true
    } catch(e) {
        req.tokenIsExist = false
    } finally {
        next()
    }
}
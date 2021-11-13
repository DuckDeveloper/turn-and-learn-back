module.exports = async (req, res, next) => {
    try {
        const { userIsExist } = req

        if (userIsExist) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
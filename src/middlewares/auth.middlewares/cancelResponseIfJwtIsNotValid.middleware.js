module.exports = async (req, res, next) => {
    try {
        const { passwordIsCorrect } = req

        if (!passwordIsCorrect) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
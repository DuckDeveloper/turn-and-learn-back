const messages = require('../../message.constants.json')

module.exports = async (req, res, next) => {
    try {
        const { userIsExist } = req

        if (!userIsExist) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({ message: messages.error.USER_IS_NOT_EXIST })
    }
}
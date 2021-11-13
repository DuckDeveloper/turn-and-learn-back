const messages = require('../messages.json')

module.exports = async (req, res) => {
    try {
        const { user, tokenIsValid } = req.body

        if (!tokenIsValid) {
            return res.status(401).json({})
        }

        user.theme = user.theme === 'light'
                     ? 'dark'
                     : 'light'
        await user.save()

        return res.status(200).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e })
    }
}
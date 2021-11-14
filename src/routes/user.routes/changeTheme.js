const messages = require('../../message.constants.json')

const oppositeThemes = {
    light: 'dark',
    dark: 'light',
}

module.exports = async (req, res) => {
    try {
        const { user } = req

        user.theme = oppositeThemes[user.theme] || 'light'
        await user.save()

        return res.status(200).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}
const jwt = require('jsonwebtoken')
const config = require('config')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { user } = req

        const newToken = jwt.sign(
            { userId: user.id },
            config.get('JWT_SECRET'),
            { expiresIn: '30d' },
        )

        return res.status(200).json({
            token: newToken,
            login: user.login,
            theme: user.theme,
            avatarUrl: user.avatar,
        })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}
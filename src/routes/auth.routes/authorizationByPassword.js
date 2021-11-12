const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const messages = require('./messages.json')

module.exports = async (req, res) => {
    try {
        const { login, password, user, userIsExist } = req.body

        if (!userIsExist) {
            return res.status(400).json({ message: messages.error.USER_IS_NOT_EXIST })
        }

        const passwordsIsMatch = await bcrypt.compare(password, user.password)

        if (!passwordsIsMatch) {
            return res.status(400).json({ message: messages.error.INVALID_PASSWORD })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('JWT_SECRET'),
            { expiresIn: '30d' },
        )

        return res.status(200).json({ message: messages.success.SUCCESSFUL_AUTHORIZATION })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e })
    }
}
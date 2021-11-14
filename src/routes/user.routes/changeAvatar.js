const config = require('config')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { file, user } = req

        const filepath = `${ config.get('AVATARS_STORAGE') }/${ file.filename }`

        user.avatar = filepath
        await user.save()

        return res.status(200).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}
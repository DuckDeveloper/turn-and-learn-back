const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { folder } = req
        const { folderName } = req.body

        folder.name = folderName
        await folder.save()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}
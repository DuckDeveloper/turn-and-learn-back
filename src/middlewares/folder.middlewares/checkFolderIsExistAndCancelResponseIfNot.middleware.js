const Folder = require('../../models/Folder')

module.exports = async (req, res, next) => {
    try {
        const { id: entityId } = req.body

        const folder = await Folder.findOne({ entityId })
        if (!folder) throw new Error()

        req.folder = folder
        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
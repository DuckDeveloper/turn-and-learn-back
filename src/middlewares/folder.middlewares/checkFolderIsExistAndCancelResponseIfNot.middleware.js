const Folder = require('../../models/Folder')

module.exports = async (req, res, next) => {
    try {
        const entityId = req.body.id || req.params.id
        if(Number.isNaN(+entityId)) throw new Error()

        const folder = await Folder.findOne({ entityId })
        if (!folder) throw new Error()

        req.folder = folder
        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}
const Folder = require('../../models/Folder')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const entityId = req.body.id || req.params.id
        if (Number.isNaN(+entityId)) throw new Error()

        const folder = await Folder.findOne({ entityId })
        if (!folder) throw new Error()

        req.folder = folder

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}
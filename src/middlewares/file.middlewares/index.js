const uploadFile = require('./uploadFile.middleware')
const deleteOldFile = require('./deleteOldFile.middleware')

module.exports = {
    uploadFile,
    deleteOldFile,
}
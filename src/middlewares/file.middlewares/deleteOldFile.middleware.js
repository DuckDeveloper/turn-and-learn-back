const fs = require('fs')
const path = require('path')

module.exports = async (req, res, next) => {
    try {
        const { user, file: newFile } = req

        const avatarIsDefault = user.avatarUrl.split('/').some(dirName => dirName === 'default')

        if (!avatarIsDefault && newFile) {
            fs.unlink(path.join(__dirname, '..', '..', user.avatarUrl), () => null)
        }

    } finally {
        next()
    }
}
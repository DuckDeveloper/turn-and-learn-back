const fs = require('fs')
const path = require('path')

module.exports = async (req, res, next) => {
    try {
        const { user } = req

        const avatarIsDefault = user.avatar.split('/').some(dirName => dirName === 'default')

        if (!avatarIsDefault) {
            fs.unlink(path.join(__dirname, '..', '..', user.avatar), () => null)
        }

    } finally {
        next()
    }
}
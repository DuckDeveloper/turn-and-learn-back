const multer = require('multer')
const moment = require('moment')
const config = require('config')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, `src/${ config.get('AVATARS_STORAGE') }`)
    },
    filename(req, file, cb) {
        const filetype = file.originalname.split('.').pop()
        const filename = `${ moment().format('DDMMYYYY-HHmmss_SSS') }-avatar.${ filetype }`

        cb(null, filename)
    },
})

const fileFilter = (req, file, cb) => {
    if (req.cancelOptions) return cb(null, false)

    const isValid = file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'

    return cb(null, isValid)
}

module.exports = multer({ storage, fileFilter })
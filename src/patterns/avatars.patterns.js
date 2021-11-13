const config = require('config')

const directoryPath = config.get('DEFAULT_AVATARS_STORAGE')

module.exports = [
    `${ directoryPath }/1.jpg`,
    `${ directoryPath }/2.jpg`,
    `${ directoryPath }/3.jpg`,
    `${ directoryPath }/4.jpg`,
]
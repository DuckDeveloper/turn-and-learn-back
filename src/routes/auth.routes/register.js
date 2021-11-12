const bcrypt = require('bcryptjs')

const User = require('../../models/User')
const Card = require('../../models/Card')
const CardsList = require('../../models/CardsList')
const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const messages = require('./messages.json')
const getRandomValuesFromArray = require('../../helpers/getRandomValuesFromArray')

const cardsPattern = require('../../patterns/cards.patterns')
const avatarPattern = require('../../patterns/avatars.patterns')
const folderTemplateNamesPattern = require('../../patterns/folderTemplateNames.patterns')


module.exports = async (req, res) => {
    try {
        const { login, password, passwordLengthIsValid, userIsExist, loginLengthIsValid } = req.body

        if (!login) {
            return res.status(400).json({ message: messages.error.LOGIN_FIELD_IS_EMPTY })
        }
        if (userIsExist) {
            return res.status(400).json({ message: messages.error.USER_IS_EXIST })
        }
        if (!loginLengthIsValid) {
            return res.status(400).json({ message: messages.error.LOGIN_LENGTH_IS_NOT_VALID })
        }
        if (!passwordLengthIsValid) {
            return res.status(400).json({ message: messages.error.PASSWORD_LENGTH_IS_NOT_VALID })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const cardsTemplate = getRandomValuesFromArray(cardsPattern, 6)
        const avatarTemplate = getRandomValuesFromArray(avatarPattern, 1)[0]
        const folderTemplateName = getRandomValuesFromArray(folderTemplateNamesPattern, 1)[0]

        const cardsList = new CardsList({
            cardsId: [],
        })
        const folder = new Folder({
            name: folderTemplateName,
            cardsId: [],
        })
        const foldersList = new FoldersList({
            foldersId: [],
        })

        await Promise.all(cardsTemplate.map(async ({ en, ru }) => {
            const card = new Card({
                en,
                ru,
            })
            await card.save()

            cardsList.cardsId.push(card.id)

            return true
        }))
        await cardsList.save()

        folder.cardsId = getRandomValuesFromArray(cardsList.cardsId, 3)
        await folder.save()

        foldersList.foldersId.push(folder.id)
        await foldersList.save()

        const user = new User({
            login,
            password: hashedPassword,
            avatar: avatarTemplate,
            cardsListId: cardsList.id,
            foldersListId: foldersList.id,
        })
        await user.save()

        return res.status(200).json({ message: messages.success.SUCCESSFUL_REGISTRATION })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e })
    }
}
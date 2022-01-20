const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')
const Card = require('../../models/Card')
const CardsList = require('../../models/CardsList')
const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const messages = require('../../message.constants.json')
const getRandomValuesFromArray = require('../../helpers/getRandomValuesFromArray')
const getUniqueIdForDbEntity = require('../../helpers/getUniqueIdForDbEntity')

const {
    getRandomAvatarPattern,
    getRandomCardsPattern,
    getRandomFolderTemplateNamePattern,
} = require('../../getters')


module.exports = async (req, res) => {
    try {
        const { username, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 12)

        const cardsTemplate = getRandomCardsPattern()
        const avatarTemplate = getRandomAvatarPattern()
        const folderTemplateName = getRandomFolderTemplateNamePattern()

        const cardsList = new CardsList({
            cardsId: [],
        })
        const folder = new Folder({
            entityId: await getUniqueIdForDbEntity(Folder),
            name: folderTemplateName,
            cardsId: [],
        })
        const foldersList = new FoldersList({
            foldersId: [],
        })

        await Promise.all(cardsTemplate.map(async ({ firstSide, secondSide }) => {
            const card = new Card({
                entityId: await getUniqueIdForDbEntity(Card),
                firstSide,
                secondSide,
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
            username,
            password: hashedPassword,
            avatarUrl: avatarTemplate,
            cardsListId: cardsList.id,
            foldersListId: foldersList.id,
        })
        await user.save()

        const authToken = jwt.sign(
            { userId: user.id },
            config.get('JWT_SECRET'),
            { expiresIn: '30d' },
        )

        return res.status(200).json({
            authToken,
            username: user.username,
            theme: user.theme,
            avatarUrl: user.avatarUrl,
        })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}
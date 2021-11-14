const getUniqueIdForDbEntity = async (entityModel) => {
    try {
        const entityId = Math.floor(Math.random() * 500000)

        const isRepeatableId = Boolean(await entityModel.findOne({ entityId }))

        if (!isRepeatableId) {
            console.log(entityId)
            return entityId
        }

        return getUniqueIdForDbEntity(entityModel)
    } catch(e) {
        return null
    }
}

module.exports = getUniqueIdForDbEntity
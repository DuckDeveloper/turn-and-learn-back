module.exports = (array, neededElemsAmount) => {
    if (neededElemsAmount < 1 || !neededElemsAmount) return []
    if (neededElemsAmount > array.length) return [...array]

    const numsSet = new Set()
    while (numsSet.size !== +neededElemsAmount) {
        numsSet.add(Math.floor(Math.random() * array.length))
    }

    const numsArray = [...numsSet]

    return numsArray.map(i => array[i])
}
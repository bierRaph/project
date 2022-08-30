function listConsecutiveRange(array: Array<number>, increaseValue: number) {
    let vectorLength = 1

    const couples = []

    for (let i = 1; i <= array.length + 1; i++) {
        if (array[i] === array[i - 1] + increaseValue) {
            vectorLength++
        } else {
            if (vectorLength > 1) {
                couples[couples.length] = {
                    index: i - vectorLength,
                    length: vectorLength,
                }
            }
            vectorLength = 1
        }
    }
    return couples
}

export function findLongestConsecutiveRange(
    array: Array<number>,
    increaseValue: number
) {
    if (array.length == 0) {
        return [0, 0]
    } else if (array.length == 1) {
        return [0, 1]
    }
    const positiveArray = listConsecutiveRange(array, increaseValue)
    const negativeArray = listConsecutiveRange(array, -increaseValue)
    const mergedArray = [...positiveArray, ...negativeArray]
    if (mergedArray.length == 0) {
        return [0, 0] // Added that line to check if there is no match in the whole array
    }
    if (mergedArray.length == 1) {
        return [mergedArray[0].index, mergedArray[0].length]
    }
    const lengthArray = mergedArray.map((element) => {
        return element.length
    })
    const maxIndex = Math.max(...lengthArray)
    const results = mergedArray.find((result) => {
        return result.length === maxIndex
    })
    return [results.index, results.length]
}

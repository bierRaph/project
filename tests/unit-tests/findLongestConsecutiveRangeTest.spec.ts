import 'jest'
import { findLongestConsecutiveRange } from '../../findLongestConsecutiveRange'

describe('findLongestConsecutiveRange', () => {
    it('test [] with 1 incremmentation should return [0,0] ', async () => {
        const test = []
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([0, 0])
    })

    it('test [1] with 1 incremmentation should return [0,1]', async () => {
        const test = [1]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([0, 1])
    })

    it('test [1, 2] with 1 incremmentation should return [0,2]', async () => {
        const test = [1, 2]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([0, 2])
    })

    it('test [1, 1, 2] with 1 incremmentation should return [1,2]', async () => {
        const test = [1, 1, 2]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([1, 2])
    })
    it('test [1, 2, 3, 1, 2, 3] with 1 incremmentation should return [0,3]', async () => {
        const test = [1, 2, 3, 1, 2, 3]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([0, 3])
    })

    it('test [1, 2, 3, -10, -9, -8, -7, 0, 1, 2] with 1 incremmentation should return [3, 4]', async () => {
        const test = [1, 2, 3, -10, -9, -8, -7, 0, 1, 2]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([3, 4])
    })

    it('test [1, 1, 2, 3, 1, 2, 3]  with 1 incremmentation should return [1, 3]', async () => {
        const test = [1, 1, 2, 3, 1, 2, 3]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([1, 3])
    })

    it('test [1, 2, 3, 4, 3, 2, 1, 0, -2]  with 1 incremmentation should return [3, 5]', async () => {
        const test = [1, 2, 3, 4, 3, 2, 1, 0, -2]
        expect(findLongestConsecutiveRange(test, 1)).toStrictEqual([3, 5])
    })
    it('test [1, 4, 7, 10, 0, 3, 2, 1, -1] with 3 incremmentation should return [0, 4]  ', async () => {
        const test = [1, 4, 7, 10, 0, 3, 2, 1, -1]
        expect(findLongestConsecutiveRange(test, 3)).toStrictEqual([0, 4])
    })
    it('test [10, 12, 14, 20, 30, 20, 30, 20, 30] with 10 incremmentation should return [3, 2]', async () => {
        const test = [10, 12, 14, 20, 30, 20, 30, 20, 30]
        expect(findLongestConsecutiveRange(test, 10)).toStrictEqual([3, 2])
    })
})

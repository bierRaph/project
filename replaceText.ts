function replaceText(
    text: string,
    from: number,
    to: number,
    replacement: string
) {
    // using empty replacement text doesn't cause any issue
    // using empty text doesn't cause any issue
    // using a string size inferrior than the size of the initial text, doesn't cause any issue
    // using a string size supperior than the size of the initial text, doesn't cause any issue

    // using incorrect values to call the function might cause unwanted behaviors.
    // My solution to mitigate the issue would be to just use Typescript to make of Javascript a type safe language,
    // hence allowing us to see the problem arising during development and not during production for example.

    // If we wanted to keep the Javascript solution, we could just check that the replacement text is not undefined or null

    return replacement === null || replacement === undefined
        ? 'please select a real replacement string'
        : text.substring(0, from) + replacement + text.substring(to)
}
// example
// console.log(replaceText('', 2, 4, 'Hello'))

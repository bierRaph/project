function eliminateDuplicates(arrayOfNumbers) {
    const deduplicated = []
    arrayOfNumbers.forEach((number) => {
        // indexOf returns -1 if the results doesn't exist.
        // There is then no need to use > 0 here
        if (deduplicated.indexOf(number) === -1) {
            deduplicated.push(number)
        }
    })
    return deduplicated
}

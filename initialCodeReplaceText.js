

function replaceText(text, from, to, replacement) {
    return text.substring(0, from) + replacement + text.substring(to)
}


// example :
// console.log(replaceText('', 2, 4, 'world'))

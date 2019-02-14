function isShortWord(yarn) {
    // if (yarn.length < 5) {
    //     return true;
    // } else {
    //     return false;
    // }

    return yarn.length <5 ;
}

console.log(isShortWord("Yarn"));
console.log(isShortWord("Thread"));

function getSmallerSegment(thread, numInput) {
    return thread.substring(0, numInput);
}

console.log(getSmallerSegment("Codeup", 4));
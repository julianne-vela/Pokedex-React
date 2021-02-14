export function capFirstLetter(strInput) {
    const separatedWords = strInput.toLowerCase().split(' ');
    for (let i = 0; i < separatedWords.length; i++) {
        separatedWords[i] = separatedWords[i].charAt(0).toUpperCase() + separatedWords[i].substring(1);
    }
    return separatedWords.join(' ');
}


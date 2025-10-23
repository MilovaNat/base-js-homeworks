function encrypt(word) {
    const firstPart = word.split('').slice(0, word.length/2);
    const secondPart = word.split('').slice(word.length/2);
    firstPart.reverse();
    secondPart.reverse();
    return firstPart.concat(secondPart).join('');
}

function decrypt(word, encryptedWord) {
    return encrypt(encryptedWord) === word;
}

const pass = 'password';
console.log(decrypt(pass, encrypt(pass)));
console.log(decrypt(pass, 'another'));
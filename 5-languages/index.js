function getGreeting(locale) {
    if (typeof locale != "string") {
        return 'Locale is not string';
    }
    switch(locale.toLowerCase()) {
        case 'de' :
            return 'Guten Tag';
        case 'ru':
            return'Добрый день';
        case 'it':
            return'Buon pomeriggio';
        case 'en':
        default:
            return 'Good afternoon';
    }
}

console.log(getGreeting('DE'));
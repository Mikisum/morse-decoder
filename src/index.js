const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodeStr = new String();
    let morseLetter = new String();
    for (i = 0; i < expr.length; i += 2) {
        let twoChars = expr[i] + expr[i + 1];
        if (twoChars === '11') {
            morseLetter += '-';
        }
        else if (twoChars === '10') {
            morseLetter += '.';
        }
        if  (twoChars = '**') {
            morseLetter += '';
        }
        if ((i + 2)  % 10 === 0 ) {
            if (morseLetter === '') {
                decodeStr += ' ';
            }
            else {
                decodeStr += MORSE_TABLE[morseLetter];
                morseLetter = '';
            }    
        }    
    }
    return decodeStr;
}

module.exports = {
    decode
}
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
    let array = [];
    let i = 0;
    let j = 2;
    while (expr) {
    if (expr.slice(i, j)) {
        if (+expr.slice(i, j)) {
            array.push(String(Number(expr.slice(i, j))));
        }
        // else if (expr.slice(i, j) == "**" && expr.slice(i-2, j-2) != "**"){
        //     array.push(" ");
        // }
        else {
            array.push(" ");
        }
        i = j;
        j = j + 2;
    }
    else break;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "10") {
            array[i] = ".";
        }
        else if (array[i] === "11") {
            array[i] = "-";
        }
    }
    array = array.join('');
    let morseArray = [];
    for (let i = 0; i < array.length; i = i + 5) {
        morseArray.push(array.slice(i, i + 5).trimStart());
    }
    for (let i = 0; i < morseArray.length; i++) {
        for (let key in MORSE_TABLE) {
            if (morseArray[i] === key) {
                morseArray[i] = MORSE_TABLE[key];
            }
        }
    }
    for (let i = 0; i < morseArray.length; i++) {
        if (morseArray[i] === '')
            morseArray[i] = " ";
    }
    morseArray = morseArray.join('');
    return morseArray;
}

module.exports = {
    decode
}
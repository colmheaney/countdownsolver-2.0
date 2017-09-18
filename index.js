// let startLoadDictionary = performance.now();
let root = dictionary(words());
// let endLoadDictionary = performance.now();

// console.log("Time to load dictionary: ", endLoadDictionary - startLoadDictionary);

function solveForLetters(letters) {
    let lettersArray = letters.split('');
    return _solveForLetters(root, lettersArray, "", 0, []);
}

function _solveForLetters(node, letters, word, index, validWords) {
    if(node[0])
        validWords.push(word)

    for(let i = index; i < letters.length; i++) {
        let c = letters[i];

        if(!node[c])
            continue;
            
        word += c;
        _solveForLetters(node[c], letters, word, ++index, validWords);    
    }
    return validWords;
}
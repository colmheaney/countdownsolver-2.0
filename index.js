let root = dictionary(words());

function solveForLetters(letters) {
    let lettersArray = letters.split('');
    return _solveForLetters(root, letters, "", {}, []);
}

function _solveForLetters(node, letters, word, alreadySeenInBranch, validWords) {
    if(node[0])
        validWords.push(word)

    if(letters.length == word.length)
        return;

    let alreadySeenInIteration = {}

    for(let i = 0; i < letters.length; i++) {
        let c = letters.charAt(i);

        if(alreadySeenInBranch[i] || alreadySeenInIteration[c])
            continue;
            
        if(node[c]) {
            alreadySeenInIteration[c] = 1;
            alreadySeenInBranch[i] = 1;
            _solveForLetters(node[c], letters, word+c, alreadySeenInBranch, validWords);    
            alreadySeenInBranch[i] = 0;
        }
    }
    return validWords;
}
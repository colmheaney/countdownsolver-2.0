const root = dictionary(words);

function solveForLetters(letters) {
    return _solveForLetters(root, letters, "", {}, []);
}

function _solveForLetters(node, letters, word, alreadySeenInBranch, validWords) {
    if(node[0])
        validWords.push(word)

    if(letters.length == word.length)
        return;

    const alreadySeenInIteration = {}

    for(let i = 0; i < letters.length; i++) {
        const c = letters.charAt(i);

        if(alreadySeenInBranch[i] || alreadySeenInIteration[c])
            continue;
            
        if(node[c]) {
            alreadySeenInIteration[c] = true;
            alreadySeenInBranch[i] = true;
            _solveForLetters(node[c], letters, word+c, alreadySeenInBranch, validWords);    
            alreadySeenInBranch[i] = false;
        }
    }
    return validWords;
}
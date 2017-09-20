function dictionary(words) {
    const root = {};

    words.map(function(word) {
        put(word);
    });

    function put(word) {
        _put(root, word, 0, 1);
    }

    function _put(node, word, i, d) {
        const c = word.charAt(i);
        if(!node[c])
            node[c] = {}

        if(d == word.length) {
            node[c][0] = 1;
            return;
        }

        _put(node[c], word, ++i, ++d);
    }
    return root;
}
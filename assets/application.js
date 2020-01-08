// Put your applicaiton javascript here
snippetOptions: {
    rule: {
        match: /<\/body>/i,
        fn: function (snippet, match) {
            return snippet + match;
        }
    }
}

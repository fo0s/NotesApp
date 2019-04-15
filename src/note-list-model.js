(function(exports) {
    var text = [];

    function NotesList(input) {
        text.push(input);
    }

    function returnNoteList() {
        return text;
    }

    function takeNotes() {
        text.push(returnNote);
    }

    exports.returnNoteList = returnNoteList;
})(this);
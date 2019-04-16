(function(exports) {
    function NotesList(note = Note) {
        this.list = [];
        this.note = note;
    }

    function returnNoteList() {
        return this.list;
    }

    function takeNote(input) {
        this.list.push(new this.note(input));
    }

    exports.returnNoteList = returnNoteList;
})(this);
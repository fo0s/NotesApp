(function(exports) {
    var text = "";

    function Note(input) {
        this.text = input;
    }

    function returnNote() {
        return this.text;
    }

    exports.Note = Note;
})(this);
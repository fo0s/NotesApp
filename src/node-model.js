(function(exports) {
    var text = "";

    function Notes(input) {
        text = input;
    }

    function returnNote() {
        return text;
    }

    exports.returnNote = returnNote;
})(this);
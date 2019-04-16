(function(exports) {
    function checkNotes() {
        var notes = new Notes();

        if (notes !== "") {
            throw new Error("Error: Should have a value");
        }
    }
})(this);
function noteController() {}

noteController.prototype.changeDiv = function() {
    // console.log(document.getElementById('app'))
    // console.log(this.view)
    document.getElementById("app").innerHTML = "Favourite drink: seltzer";
};

window.onload = function() {
    var newNoteController = new noteController();
    newNoteController.changeDiv();
};
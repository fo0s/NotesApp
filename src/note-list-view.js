
(function(exports) {

  function NotesListView() {


  NotesListView.prototype.htmlMaker = function(notesList) {
    var nLen = notesList.list.length;
    if (nLen === 0) {return "Umm no notes hun"
  } else {
    noteyMcNoteFace = "<ul>"
    for (var i = 0; i < nLen; i++) {
      noteyMcNoteFace += "<li><div>" + notesList.list[i].text + "</div></li>";
    }
    noteyMcNoteFace += "</ul>";
  };
    return noteyMcNoteFace;
  };

};
  exports.NotesListView = NotesListView;
})(this);

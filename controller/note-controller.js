(function(exports){
  function NoteController(noteList){
    this.noteListView = new NoteListView(noteList);
  };

    NoteController.prototype.insertHTMLIntoApp = function(){
      var htmlView = this.noteListView.convertToHTMLView();
      document.getElementById('app').innerHTML = htmlView;
    };
    exports.NoteController = NoteController;
})(this);

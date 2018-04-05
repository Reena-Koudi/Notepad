(function(exports){
  function testNoteListViewMultipleNotes(){
    var noteList = new NoteList();
    console.log("Hi");
    noteList.createNote("Javascript");
    noteList.createNote("Ruby");
    var noteListView = new NoteListView(noteList);
    htmlView = noteListView.convertToHTMLView();
    console.log(htmlView);
    output = "<ul><li><div>Javascript</div></li><li><div>Ruby</div></li></ul>";
    console.log(output);
    assert.isTrue(htmlView === output);
  };
  exports.testNoteListViewMultipleNotes = testNoteListViewMultipleNotes();
})(this);

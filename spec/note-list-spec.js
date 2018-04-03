(function(exports){
  function testNoteList(){
    var note = new Note("Javascript");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert.isTrue(noteList.getNotes()[0] === note);
  };
  exports.testNoteList = testNoteList();
})(this);

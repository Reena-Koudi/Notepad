(function(exports){
  function testNoteListAddNotesAndGetNotes(){
    var note = new Note("Javascript");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert.isTrue(noteList.getNotes()[0] === note);
  };
  exports.testNoteListAddNotesAndGetNotes = testNoteListAddNotesAndGetNotes();
})(this);

(function(exports){
  function testNoteListCreateNote(){
    var noteList = new NoteList();
    noteList.createNote("Javascript");
    assert.isTrue(noteList.getNotes()[0].getText() === "Javascript");
  };
  exports.testNoteListCreateNote = testNoteListCreateNote();
})(this);

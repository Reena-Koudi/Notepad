(function(exports){
  function testNotesArrayIsEmpty(){
    var noteList = new NoteList();
    assert.isTrue(noteList.notes.length === 0);
  };
  exports.testNotesArrayIsEmpty = testNotesArrayIsEmpty();
})(this);

(function(exports){
  function testNoteListAddNotesAndGetNotes(){
    var note = new Note("Javascript");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert.isTrue(noteList.notes[0] === note);
  };
  exports.testNoteListAddNotesAndGetNotes = testNoteListAddNotesAndGetNotes();
})(this);

(function(exports){
  function testNoteListCreateNote(){
    var noteList = new NoteList();
    noteList.createNote("Javascript");
    assert.isTrue(noteList.notes[0].getText() === "Javascript");
  };
  exports.testNoteListCreateNote = testNoteListCreateNote();
})(this);

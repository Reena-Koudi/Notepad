(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.addNote = function(note){
    this.notes.push(note);
  };

  NoteList.prototype.getNotes = function(){
    return this.notes;
  };

  NoteList.prototype.createNote = function(text){
    var note = new Note(text);
    this.addNote(note);
  };
  exports.NoteList = NoteList;
})(this);

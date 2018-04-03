
(function(exports){
  function testNoteText(){
    var note = new Note("Javascript");
    assert.isTrue(note.getText() === "Javascript");
  };
  exports.testNoteText = testNoteText();
})(this);

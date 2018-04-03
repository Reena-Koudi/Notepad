(function(exports){
  function testNoteText(){
    var note = new Note("Javascript");
    if(note.getText() !== "Javascript"){
    throw new Error('No text passed');
  }
  console.log('Test Passed');
  };

  testNoteText();
})(this);

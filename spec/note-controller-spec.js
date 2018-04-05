(function(exports){
  function testNoteControllerInsertHTMLIntoApp(){
    var noteList = new NoteList();
    noteList.createNote("Favourite drink: seltzer");
    var noteController = new NoteController(noteList);
    noteController.insertHTMLIntoApp();
    var actualHTMLView = document.getElementById('app').innerHTML;
    var otputHTMLView = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
    assert.isEqual(actualHTMLView, outputHTMLView);
  };
  exports.testNoteControllerInsertHTMLIntoApp = testNoteControllerInsertHTMLIntoApp();
})(this);

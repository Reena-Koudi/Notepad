(function(exports){
  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.createHTML = function() {
    return "<div>" + this.note + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

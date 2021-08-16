function removeVideo(event) {
    var r = confirm("Delete item "+ event.target.item + "?");
    if (!r) return;
    event.target.piece.score.splice(parseInt(event.target.item), 1);
    showScore(event.target.piece);
}

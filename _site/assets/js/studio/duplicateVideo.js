function duplicateVideo(event) {
    event.target.piece.score.splice(parseInt(event.target.item), 0, event.target.piece.score[parseInt(event.target.item)]);
    console.log(event.target.piece)
    showScore(event.target.piece);
}

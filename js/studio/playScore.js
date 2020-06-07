function playScore(piece, times) {
    stopScore(piece, times);
    for (var i = 0; i < piece.score.length; i++) {
        const video = piece.score[i];
        const count = i;
        var time = setTimeout(function() {
            play(video, count);
        }, video.schedule);
        times.push(time);
    }
}

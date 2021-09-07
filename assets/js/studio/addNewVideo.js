function saveVideo(piece) {
    var index = document.getElementById("current_video").value;
    var video;
    if (index == -1){
        video = Object.create(Video);
        piece.score.push(video);
    }else{ // Edit save.
        video = piece.score[index];
    }
    const keys = Object.keys(Video);
    //for (const key of keys) {
        video[0] = document.getElementById("url").value;
    //}

    showScore(piece);
    showHide('video_form');
}

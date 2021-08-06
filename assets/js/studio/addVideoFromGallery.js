function addVideoFromGallery() {
    var tr, td, i, j, txtValue;
    var node, piece, video;

    piece = Object.create(Piece);

    var div = document.getElementById("temporary_div");

    node = document.getElementById("title");
    var title = node.textContent || node.innerText;

    node = document.getElementById("author");
    var author = node.textContent || node.innerText;

    node = document.getElementById("date");
    var date = node.textContent || node.innerText;

    node = document.getElementById("description");
    var description = node.textContent || node.innerText;

    var table = document.getElementById("score");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        video = Object.create(Video);
        for (j = 0; j < 9; j++) {
            td = tr[i].getElementsByTagName("td")[j];

            txtValue = td.textContent || td.innetText;
            switch (j) {
                case 0: video.url = txtValue;
                break;
                case 1: video.startTime = txtValue;
                break;
                case 2: video.endTime = txtValue;
                break;
                case 3: video.volume = txtValue;
                break;
                case 4: video.posx = txtValue;
                break;
                case 5: video.posy = txtValue;
                break;
                case 6: video.width = txtValue;
                break;
                case 7: video.height = txtValue;
                break;
                case 8: video.schedule = txtValue;
                break;
            }
        }
        piece.score.push(video);
    }

    div.parentNode.removeChild(div);

    piece.title = title;
    piece.author = author;
    piece.date = date;
    piece.description = description;
    piece.license = "";

    showScore(piece);
}

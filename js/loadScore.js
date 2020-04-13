function loadScore() {
    var e = document.getElementById("file-input");
    var file = e.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        piece = JSON.parse(contents);
        showScore(piece);
    };
    reader.readAsText(file);
}

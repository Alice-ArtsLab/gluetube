function loadScore(filename) {
    // Load score from file, passed by the user
    if (filename == null){
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
    //Load score from the server
    if (filename != null){
        var xhr = new XMLHttpRequest();
        var url = "/webart/gluetube/loadScore.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                piece = JSON.parse(xhr.responseText);
                showScore(piece);
                // Clean up the list
                var e = document.getElementById("list_server_score");
                e.innerHTML = "";
            }
        }
        xhr.responseType="text";
        xhr.send("file=" + filename); // Actually execute the request
    }
}

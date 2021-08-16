function listScores() {
    var e = document.getElementById("list_server_score");
    var xhr = new XMLHttpRequest();
    var url = "listScores.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "text/xml");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            e.innerHTML = xhr.responseText;
        }
    }
    xhr.send(); // Actually execute the request
}

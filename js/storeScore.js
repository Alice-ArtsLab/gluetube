function storeScore(piece){
    var xhr = new XMLHttpRequest();
    var url = "storeScore.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var vars = JSON.stringify({ data : piece})
    xhr.setRequestHeader("Content-type", "text/xml");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var return_data = xhr.responseText;
            alert("Enviado com sucesso!");
        }
    }
    xhr.send(vars); // Actually execute the request
}

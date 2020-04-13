function storeScore(piece){
    var xhr = new XMLHttpRequest();
    var url = "saveRepo.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

//    var jsonString = JSON.stringify(piece);
//    var blob = new Blob([jsonString], {
//        type: "text/xml"
//    });

//    var vars = "data=" + jsonString;

    var vars = JSON.stringify({ data : piece})

    console.log(vars);
    xhr.setRequestHeader("Content-type", "text/xml");
    // Access the onreadystatechange event for the XMLHttpRequest object
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var return_data = xhr.responseText;
            console.log(return_data);
            alert("Enviado com sucesso!");
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    xhr.send(vars); // Actually execute the request
}

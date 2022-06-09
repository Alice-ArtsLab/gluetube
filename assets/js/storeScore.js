function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function setMetaData(piece){
    piece.id = generateUUID();
    piece.title= document.getElementById("title").value;
    piece.author= document.getElementById("author").value;
    piece.category= document.getElementById("category").value;
    piece.description= document.getElementById("description").value;
    piece.license= document.getElementById("license").value;

}

function storeScore(piece){
    setMetaData(piece);
    var xhr = new XMLHttpRequest();
    var url = "/webart/gluetube/storeScore.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var vars = JSON.stringify(piece)
    xhr.setRequestHeader("Content-type", "text/json");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var return_data = xhr.responseText;
            alert("Enviado com sucesso!");
            console.log(return_data);
        }
    }
    xhr.send(vars); // Actually execute the request
}

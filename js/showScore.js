/* Creates the GUI of loaded scores */
function showScore(piece) {

    // Load the meta data
    document.getElementById("title").value = piece.title;
    document.getElementById("author").value = piece.author;
    document.getElementById("date").value = piece.date;
    document.getElementById("description").value = piece.description;
    document.getElementById("license").value = piece.license;

    // Load the score
    var table = document.getElementById("score_table");

    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    // Add labels
    const keys = Object.keys(Video);
    var header = table.createTHead();
    var newRow = header.insertRow(-1);

    // Adding index column
    let newCell = newRow.insertCell(-1);
    let newText = document.createTextNode("index");
    newCell.appendChild(newText);

    for (const key of keys) {
        newCell = newRow.insertCell(-1);
        newText = document.createTextNode(key);
        newCell.appendChild(newText);
    }
    // Adding label to the buttons
    newCell = newRow.insertCell(-1);
    newText = document.createTextNode("Edit");
    newCell.appendChild(newText);

    newCell = newRow.insertCell(-1);
    newText = document.createTextNode("Remove");
    newCell.appendChild(newText);

    newCell = newRow.insertCell(-1);
    newText = document.createTextNode("Duplicate");
    newCell.appendChild(newText);

    // Add values
    for (var i = 0; i < piece.score.length; i++) {
        let video = piece.score[i];
        let values = Object.values(video);
        var newRow = table.insertRow(-1);

        let newCell = newRow.insertCell(-1);
        let newText = document.createTextNode(i);
        newCell.appendChild(newText);

        for (const value of values) {
            newCell = newRow.insertCell(-1);
            newText = document.createTextNode(value);
            newCell.appendChild(newText);
        }
        // Adding control buttons
        newCell = newRow.insertCell(-1);
        button = document.createElement("button");
        button.innerHTML = "Edit";
        button.item = i;
        button.piece = piece;
        button.onclick = editVideo;
        newCell.appendChild(button);

        newCell = newRow.insertCell(-1);
        button = document.createElement("button");
        button.innerHTML = "Remove";
        button.item = i;
        button.piece = piece;
        button.onclick = removeVideo;
        newCell.appendChild(button);

        newCell = newRow.insertCell(-1);
        button = document.createElement("button");
        button.innerHTML = "Duplicate";
        button.item = i;
        button.piece = piece;
        button.onclick = duplicateVideo;
        newCell.appendChild(button);

    }
}

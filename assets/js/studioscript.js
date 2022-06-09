var piece =  Object.assign({}, Piece);

function addItem2Library(event){
    var key = event.which || event.keyCode;
    if (key != 13)
        return;
    var url = document.getElementById("item").value;
    piece.library.push(url);
    updateLibrary();
}

function updateLibrary(){
    var table = document.getElementById("biblioteca");
    while (table.firstChild){
        table.removeChild(table.firstChild);
    }
    for (var i = 0 ; i < piece.library.length ; i++){
        var tr = document.createElement("div");
        var button = document.createElement("button");
        tr.classList.add("librare")
        var td = document.createElement("div");
        td.innerHTML = '<img class="image is-96x96" src="https://bulma.io/images/placeholders/128x128.png">';
        tr.appendChild(td);

        td = document.createElement("h1");
        td.classList.add("is-size-7")
        td.classList.add("redicencias")
        td.classList.add("my-2")
        td.classList.add("is-justify-content-center")
        td.innerHTML = piece.library[i];
        tr.appendChild(td);

        td = document.createElement("div");
        td.classList.add("buttons");
        td.innerHTML = `<button onclick='addLine("+i+")' class="button is-small is-primary is-light"> add </button> <button onclick='removeItemFromLibrary("+i+");' class="button is-small is-danger is-light"> del </button>`
        tr.appendChild(td);
        // td = document.createElement("TD");
        // td.innerHTML = "<button onclick='removeItemFromLibrary("+i+");'>Remove</button>"
        // tr.appendChild(td);

        // td = document.createElement("TD");
        // td.innerHTML = "<button onclick='addLine("+i+")'>Use it in timeline</button>"
        // tr.appendChild(td);

        table.appendChild(tr);
        document.getElementById("item").value = "";
    }
}

function removeItemFromLibrary(index){
    piece.library.splice(index,1);
    updateLibrary();
}

function addLine(itemId){
    var element = piece.library[itemId];
    var table = document.getElementById('timeline');
    var line = document.createElement("TR");
    line.setAttribute("counter", itemId);
    var cell1 = document.createElement("TD");
    var button = document.createElement("BUTTON");
    button.innerHTML = "x";
    button.addEventListener("click", removeLine);
    cell1.className = "title";
    cell1.innerHTML = element;
    cell1.appendChild(button);
    line.appendChild(cell1);
    var cell2 = document.createElement("TD");
    cell2.addEventListener("mouseup", addPart);
    cell2.setAttribute("url", piece.library[itemId]);
    line.appendChild(cell2);
    table.appendChild(line);
}

function removeLine(e){
  var element = e.target || e.srcElement;
  var row = element.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

count = 0;
function addPart(e){
    var element = e.target || e.srcElement;
    e.preventDefault();
    if (element.className == "time"){//click no DIV
        return;
    }

    var div = document.createElement("DIV");
    div.id = "myDIV" + count;
    div.className ="time";
    div.style.width = 270;
    div.style.left = (e.clientX - e.srcElement.offsetLeft) + "px";
    div.innerHTML = count;
    element.appendChild(div);
    dragElement(div);
    count++;
    piece.score[div.id] = Object.assign({}, Video);
    piece.score[div.id].url = element.getAttribute("url");
    piece.score[div.id].show = (e.clientX - e.srcElement.offsetLeft);
    piece.score[div.id].hide = piece.score[div.id].show + 270;
}


function removePart(element){
    var key = element.getAttribute("element");
    delete piece.score.key;

    div = document.getElementById(key);
    div.parentNode.removeChild(div);

    document.getElementById("id").value = "";
    document.getElementById("url").value = "";
    document.getElementById("show").value = "";
    document.getElementById("hide").value = "";
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value ="";
    document.getElementById("Start time").value = "";
    document.getElementById("End time").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("loop").value = "";
    document.getElementById("removePart").setAttribute("element", null);
}

function updateProperties(formField){
    key = formField.getAttribute("element");
    if (key == null)
        return;
    part = piece.score[key];
    part.show = document.getElementById("show").value;
    part.hide = document.getElementById("hide").value;
    part.x = document.getElementById("x").value;
    part.y = document.getElementById("y").value;
    part.width = document.getElementById("width").value;
    part.height = document.getElementById("height").value;
    part.start = document.getElementById("Start time").value;
    part.end = document.getElementById("End time").value;
    part.volume = document.getElementById("volume").value;
    part.loop = document.getElementById("loop").value;

    // update the timeline part
    timelinePart = document.getElementById(key);
    timelinePart.style.left = part.show;
    timelinePart.style.width = parseInt(part.hide) - parseInt(part.show);
}

function showProperties(element){
    part = piece.score[element.id];

    document.getElementById("show").setAttribute("element", element.id);
    document.getElementById("hide").setAttribute("element", element.id);
    document.getElementById("x").setAttribute("element", element.id);
    document.getElementById("y").setAttribute("element", element.id);
    document.getElementById("width").setAttribute("element", element.id);
    document.getElementById("height").setAttribute("element", element.id);
    document.getElementById("Start time").setAttribute("element", element.id);
    document.getElementById("End time").setAttribute("element", element.id);
    document.getElementById("volume").setAttribute("element", element.id);
    document.getElementById("loop").setAttribute("element", element.id);

    document.getElementById("id").value = element.id;
    document.getElementById("url").value = part.url;
    document.getElementById("show").value = part.show;
    document.getElementById("hide").value = part.hide;
    document.getElementById("x").value = part.x;
    document.getElementById("y").value = part.y;
    document.getElementById("width").value = part.width;
    document.getElementById("height").value = part.height;
    document.getElementById("Start time").value = part.start;
    document.getElementById("End time").value = part.end;
    document.getElementById("volume").value = part.volume;
    document.getElementById("loop").value = part.loop;
    document.getElementById("removePart").setAttribute("element", element.id);
    
    // Create the fake element
}

function updateTimeline(element){
    part = piece.score[element.id];
    part.show = parseInt(element.style.left);
    part.hide = parseInt(element.style.left) + parseInt(element.style.width);
    showProperties(element);
}

function updateTimeline(element){
    part = piece.score[element.id];
    part.show = parseInt(element.style.left);
    part.hide = parseInt(element.style.left) + parseInt(element.style.width);
    showProperties(element);
}

function dragElement(timelinePart) {
    timelinePart.onmousedown = mouseDown;
    var offLeft;

    function mouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Pega a posição do click
        offLeft = e.clientX - e.srcElement.offsetLeft;
        showProperties(timelinePart);
        // Se clicou no canto, não arrasta pois irá redimensionar
        if (e.offsetX > timelinePart.offsetWidth - 10){
            document.onmousemove = resize;
        }else{
            document.onmousemove = elementDrag;
        }
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        timelinePart.style.cursor = "crosshair";
        var rect = timelinePart.parentNode.getBoundingClientRect();
        var position =  e.clientX - offLeft;
        // Limita ao container pai
        if (position < rect.left)
            return;
        position -= rect.left;
        timelinePart.style.left = (position) + "px";;
        updateTimeline(timelinePart);
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        timelinePart.style.cursor = "auto";
    }

    function resize(e){
        e = e || window.event;
        e.preventDefault();
        timelinePart.style.cursor = "w-resize";
        var width =  e.clientX - timelinePart.offsetLeft;
        timelinePart.style.width = (width) + "px";
        updateTimeline(timelinePart);
    }
}

function createVideoForm(item) {
    var container = document.getElementById("video_input_form");
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }

    // Saves the id if the video exists
    var element = document.createElement("SPAN");
    element.id = "current_video";
    element.value = item;
    container.appendChild(element);

    // Check if it is to create a new video or to edit an existing one
    if (item == -1){
        item = Object.create(Video);
        document.getElementById("add_button").innerHTML = "Add";
    }else{
        item = piece.score[item];
        document.getElementById("add_button").innerHTML = "Save";
    }

    const keys = Object.keys(Video);
    for (const key of keys) {
        element = document.createElement("SPAN");
        element.innerHTML = key;
        container.appendChild(element);

        element = document.createElement("INPUT");
        element.type = "text";
        element.value = item[key];
        element.id = key;
        container.appendChild(element);

        element = document.createElement("BR");
        container.appendChild(element);
    }
}

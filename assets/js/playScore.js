function playScore(piece, times) {
    stopScore(piece, times);
    var v = Object.keys(piece.score);
    for (var i = 0; i < v.length; i++) {
        const video = piece.score[v[i]];
        const count = i;

        let time1 = setTimeout(function() {
            showVideo(video, count);
        }, video.show);
        times.push(time1);

        let time2 = setTimeout(function() {
            hideVideo(count);
        }, video.hide);
        times.push(time2);
    }
    progressBar();
}

function hideVideo(index) {
    var idContainer = 'container_video' + index;
    var element = document.getElementById(idContainer);
    document.getElementById('ytplayer').removeChild(element);
}

function showVideo(video, index) {
    var idPlayer = 'player' + index;
    var idObject = 'frame' + index;
    var idContainer = 'container_video' + index;
    var title_idContainer = idContainer + '_title';

    // DIV Container do video e titulo.
    var element = document.createElement('div');
    element.setAttribute('id', idContainer);
    element.setAttribute('class', 'dragDiv');
    element.style.left = video.x;
    element.style.top = video.y;
    element.style.width = video.width;
    element.style.height = video.height;
    element.style.zIndex = 2;
    document.getElementById('ytplayer').appendChild(element);

    // DIV barra de move up.
    var element_barUp = document.createElement('div');
    element_barUp.setAttribute('id', title_idContainer);
    element_barUp.setAttribute('class', 'barDiv');
    document.getElementById(idContainer).appendChild(element_barUp);

    // Movimenta o DIV passado por parâmetro.
    dragVideo(document.getElementById(idContainer));

    var url = video.url;
    if(url.slice(0,8) === "https://" || url.slice(0,7) === "http://"){

        // DIV Site.
        var element_frame = document.createElement('object');
        element_frame.setAttribute('type', 'text/html');
        element_frame.setAttribute('data', url);
        element_frame.setAttribute('id', idObject);
        element_frame.setAttribute('width', video.width);
        element_frame.setAttribute('height', video.height);
        document.getElementById(idContainer).appendChild(element_frame);

    }else{

        // DIV video.
        var element_video = document.createElement('div');
        element_video.setAttribute('id', idPlayer);
        element_video.style.height = "calc(100% + 20px)";
        // element_video.style.width = "100%";
        document.getElementById(idContainer).appendChild(element_video);

        player = new YT.Player(idPlayer, {
            host: 'https://www.youtube.com',
            height: "100%",
            width: "100%",
            videoId: video.url,
            playerVars: {
                modestbranding: 1, // Hide the Youtube Logo
                fs: 1, // Hide the full screen button
                controls: 0, // Show pause/play buttons in player
                showinfo: 0, // Hide the video title
                rel: 0, // Hide related videos
                cc_load_policy: 1, // Hide closed captions
                iv_load_policy: 3, // Hide the Video Annotations
                autohide: 1, // Hide video controls when playing
                autoplay: 1, // Auto-play the video on load
                end: video.endTime
            },
            events: {
                onReady: function(e) {
                    e.target.setVolume(video.volume);
                    e.target.seekTo(video.startTime);
                    e.target.playVideo();
                }
            }
        });

    }
}

// Faz o movimento do DIV.
function dragVideo(element) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(element.id + '_title')) {
        // if present, the header is where you move the DIV from:
        document.getElementById(element.id + '_title').onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function play(video, index) {
    var idPlayer = 'player' + index;
    var idObject = 'frame' + index;
    var idContainer = 'container_video' + index;
    var title_idContainer = idContainer + '_title';

    // DIV Container do video e titulo.
    var element = document.createElement('div');
    element.setAttribute('id', idContainer);
    element.setAttribute('class', 'dragDiv');
    element.style.left = video.posx;
    element.style.top = video.posy;
    element.style.zIndex = 2;
    document.getElementById('ytplayer').appendChild(element);

    // DIV barra de move up.
    var element_barUp = document.createElement('div');
    element_barUp.setAttribute('id', title_idContainer);
    element_barUp.setAttribute('class', 'barDiv');
    document.getElementById(idContainer).appendChild(element_barUp);

    // Movimenta o DIV passado por parâmetro.
    dragElement(document.getElementById(idContainer));

    var url = video.url;
    if(url.slice(0,8) === "https://" || url.slice(0,7) === "http://"){

        // DIV Site.
        var element_frame = document.createElement('object');
        element_frame.setAttribute('type', 'text/html');
        element_frame.setAttribute('data', url);
        element_frame.setAttribute('id', idObject);
        element_frame.setAttribute('width', '100%');
        element_frame.setAttribute('height', '100%');
        document.getElementById(idContainer).appendChild(element_frame);

    }else{

        // DIV video.
        var element_video = document.createElement('div');
        element_video.setAttribute('id', idPlayer);
        element_video.style.height = "calc(100% + 20px)";
        // element_video.style.width = "100%";
        document.getElementById(idContainer).appendChild(element_video);

        player = new YT.Player(idPlayer, {
            host: 'http://www.youtube.com',
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

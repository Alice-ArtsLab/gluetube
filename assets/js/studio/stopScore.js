function stopScore(piece, times) {
    //Clear all schedulling videos
    for (var i = 0; i < times.length; i++) {
        clearTimeout(times[i]);
    }
    times = [];

    // Stop and Remove all running videos
    const node = document.getElementById("ytplayer");
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }

    stopBar("clear");
}

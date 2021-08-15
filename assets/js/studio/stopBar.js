function stopBar(stat) {
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");

    if (stat == "clear") {
        progress.value = 0;
        timer.innerHTML = "0 seconds";
    }
    clearInterval(loop);
}


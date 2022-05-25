var loop;

function progressBar() {
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");

    var v = Object.keys(piece.score);
    var duration = 0;
    var list = [];
    for (var i = 0; i < v.length; i++) {
        var soma = (piece.score[v[i]].hide/1000.0 - piece.score[v[i]].show/1000.0);
        list.push(soma);
    }
    if (list.length < 1)
        return;
    var duration = list.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var k = 0;
    var j = duration;
    loop = setInterval(function(){
        if (k <= duration) {
            duration = (duration == 0)?1:duration;
            progress.value = Math.round((k / duration) * 100);
            timer.innerHTML = Math.round(j) + " seconds";
            j--;
            k++;
        }else{
            stopBar("");
        }
    }, 1000);
}

function stopBar(stat) {
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");

    if (stat == "clear") {
        progress.value = 0;
        timer.innerHTML = "0 seconds";
    }
    clearInterval(loop);
}


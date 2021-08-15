function progressBar() {
    const progress = document.getElementById("progress");
    const timer = document.getElementById("timer");

    var v = piece.score;
    var duration = 0;
    var list = [];
    for (var i = 0; i < v.length; i++) {
        var soma = (v[i].endTime - v[i].startTime) + (v[i].schedule / 1000);
        list.push(soma);
    }
    var duration = list.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var k = 0;
    var j = duration;
    loop = setInterval(function(){
        if (k <= duration) {
            progress.value = Math.round((k / duration) * 100);
            timer.innerHTML = Math.round(j) + " seconds";
            j--;
            k++;
        }else{
            stopBar("");
        }
    }, 1000);
}

function downloadScore(piece) {
    var jsonString = JSON.stringify(piece);
    var blob = new Blob([jsonString], {
        type: "text/xml"
    });

    // Create link to download the score
    var anchor = document.createElement("a");
    anchor.download = "my-score.gt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

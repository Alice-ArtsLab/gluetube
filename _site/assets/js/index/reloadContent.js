function reloadContent(link) {
    var z = document.getElementById("include-content");
    z.setAttribute("w3-include-html", "include/"+link);

    // Refresh content in div
    includeHTML();
}

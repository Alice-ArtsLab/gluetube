// Construção da tabela e execução do ví­deo
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var times = [];

var Piece = {
    id: "",
    title: "",
    author: "",
    category: "",
    date: new Date(),
    description: "",
    license: "",
    library: [],
    score: {}
}

var Video = {
    url: "none",
    show: 0,
    hide: 0,
    x: 0,
    y: 0,
    width: 800,
    height: 600,
    start: 0,
    end: 0,
    volume: 0,
    loop: 0
};

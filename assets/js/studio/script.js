// Construção da tabela e execução do ví­deo
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var times = [];
var loop;

var Piece = {
    title: "",
    author: "",
    date: new Date(),
    description: "",
    license: "",
    score: []
}

var piece = Object.create(Piece);

var Video = {
    url: "none",
    startTime: 0,
    endTime: 0,
    volume: 0,
    posx: 0,
    posy: 0,
    width: 800,
    height: 600,
    schedule: 0
};

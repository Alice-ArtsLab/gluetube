---
layout: studio
title: STUDIO
description: Collage tool using digital media!
---

{% include /studio/modal.html %}

<!-- Content -->
<div class="w3-content" style="max-width:1100px;max-height:600px;margin-top:80px;margin-bottom:80px"> 
    <div class="w3-panel">
        <h1><b>GLUETUBE</b></h1>
        <p>Collage tool using digital media!</p>
    </div>
    <div class="columns" > <!-- tentar usar tiles -->
        <div class="column is-three-fifths">
            <nav class="panel">
                <p class="panel-heading">
                    Repositories
                </p>
                <div class="panel-block">
                        {% include /studio/nav.html %}
                </div>   
                <div class="list">
                    <div class="menu-1">
                        <table id="score_table"></table>
                        <br />
                    </div>
                </div>
            </nav>
        </div>
        <div class="column">
            <nav class="panel">
                <p class="panel-heading">
                    Preview
                </p>
                <div>
                    <div id="ytplayer"></div>
                    <div class="playerControl" style="padding-top:0; margin-top: 0">
                        {% include studio/progressBar.html %}
                        <button
                            class="button btn-ani"
                            onclick="playScore(piece,times);"
                            title="Play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                        </button>
                        <button
                            class="button btn-ani"
                            onclick="stopScore(piece,times);"
                            title="Stop">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
                            </svg>
                        </button>
                    </div>                            
                </div>
            </nav>
        </div>
    </div>
    <div class="columns is-full">
        <div class="column is-full is-gapless is-multiline">
            <nav class="panel">
                <p class="panel-heading">
                    Editor
                </p>
                <div class="columns is-gapless">
                    <div class="column is-one-fifth">
                        <p class="box">  </p>
                    </div>
                    <div class="column">
                        <p class="box py-2">|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|....|</p>
                    </div>
                </div>
                <div class="columns is-gapless">
                    <div class="column is-one-fifth">
                        <p class="box">config</p>
                    </div>
                    <div class="column">
                        <p class="box">video</p>
                    </div>
                </div>
            </nav>              
        </div>
    </div> 
</div>

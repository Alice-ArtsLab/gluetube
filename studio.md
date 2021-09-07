---
layout: studio
title: STUDIO
description: Collage tool using digital media!
---

{% include /studio/modal.html %}

<script>
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
</script>

<!-- Content -->
<div class="w3-content" style="max-width:1100px;max-height:600px;margin-top:80px;margin-bottom:80px"> 
    <div class="w3-panel">
        <h1><b>GLUETUBE</b></h1>
        <p>Collage tool using digital media!</p>
    </div>
    <div class="columns" >
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
                    {% include studio/progressBar.html %}
                    {% include /studio/playerControl.html %}                          
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
                    <div class = "column">
                        {% include /studio/timeline.html %}
                    </div>
                </div>
            </nav>              
        </div>
    </div> 
</div>

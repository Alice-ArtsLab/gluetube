---
layout: studio
title: STUDIO
description: Collage tool using digital media!
---

{% include /studio/modal.html %}
<div class="menu-1">
    <table id="score_table"></table>
    <br />
    <button
        onclick="createVideoForm(-1);showHide('video_form');"
        class="formbtn">Add Video</button>
    <br /><br /><br />
    {% include studio/progressBar.html %}
    
<!-- Content -->
<div class="w3-content" style="max-width:1100px;max-height:600px;margin-top:80px;margin-bottom:80px"> 
    <div class="w3-panel">
        <h1><b>GLUETUBE</b></h1>
        <p>Collage tool using digital media!</p>
    </div>
    <div class="columns"> <!-- tentar usar tiles -->
        <div class="column is-three-fifths">
            <nav class="panel">
                <p class="panel-heading">
                    Repositories
                </p>
                <div>
                <div class="panel-block">
                    <p>
                        {% include /studio/nav.html %}  
                    </p>
                </div>   
                </div>
                <div class="panel-block">
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
                <div class="tile">
                    {% include /studio/navPlayer.html %}  
                    <div id="ytplayer"></div>                        
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

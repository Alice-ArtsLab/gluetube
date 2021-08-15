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
</div>

<div id="ytplayer"></div>

---
layout: studio
---
<div id="video_form" class="modal">
    <span onclick="showHide('video_form');" class="close" title="Close Modal">×</span>
        <div class="container modal-content" id="video_input_form">
        <!-- Here goes the auto generated form -->
        </div>
        <div class="clearfix">
            <button
                id="add_button"
                class="formbtn formbtn_cancel"
                onclick="saveVideo(piece);">Add</button>
            <button class="formbtn formbtn_cancel" onclick="showHide('video_form');" >Cancel</button>
        </div>
</div>

<div id="info_form" class="modal">
    <span onclick="showHide('info_form');" class="close" title="Close Modal">×</span>
    <div class="container modal-content">
    <label>Título</label>
    <br>
    <input class="input_text_0" type="text" value="" id="title"/>
    <br>
    <label>Autor</label>
    <br>
    <input class="input_text_0" type="text" value="" id="author"/>
    <br>
    <label>Data</label>
    <br>
    <input class="input_text_0" type="text" value="" id="date"/>
    <br>
    <label>Descrição</label>
    <br>
    <input class="input_text_0" type="text" value="" id="description"/>
    <br>
    <label>License</label>
    <br>
    <select>
    <option id='license'>Creative Commons</option>
    </select>
    </div>
    <div class="clearfix">
        <button class="formbtn formbtn_cancel" onclick="showHide('info_form');" >Close</button>
    </div>
</div>

<div class="menu-1">
    <table id="score_table"></table>
    <br />
    <button
        onclick="createVideoForm(-1);showHide('video_form');"
        class="formbtn">Add Video</button>
</div>

<div id="ytplayer"></div>

---
layout: page
title: GLUETUBE
description: Collage tool using digital media!
---
<!-- Isso e um teste -->
<!-- Slideshow -->
<div class="w3-display-container mySlides">
    <img src="assets/images/TM2_6551.jpg" style="width:100%;height:500px">
    <div class="w3-display-topleft w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">Performance created using Gluetube.</span>
    </div>
</div>
<div class="w3-display-container mySlides">
    <img src="assets/images/TM2_6551.jpg" style="width:100%;height:500px">
    <div class="w3-display-topmiddle w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">TESTE COM DUAS IMAGENS</span>
    </div>
</div>
<div class="w3-display-container mySlides">
    <img src="assets/images/TM2_6551.jpg" style="width:100%;height:500px">
    <div class="w3-display-topright w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">TESTE COM TRÊS IMAGENS</span>
    </div>
</div>
<div class="w3-display-container mySlides">
    <img src="/webart/gluetube/assets/images/TM2_6551.jpg" style="width:100%;height:500px">
    <div class="w3-display-topmiddle w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">TESTE COM QUATRO IMAGENS</span>
    </div>
</div>

<!-- Slideshow next/previous buttons -->
<div class="w3-container w3-dark-grey w3-padding w3-xlarge">
    <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
    <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>

    <div class="w3-center">
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(4)"></span>
    </div>
</div>

<script>showDivs(1);</script>

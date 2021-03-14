---
layout: post
title: "Red Lines"
date: 2020-04-17
img: "/recources/art-images/red_lines.png"
---

<img src="{{page.img}}" alt="drawing"/>

<p>There is also an animated version of this picture on <a href="https://youtu.be/pYW-9tvx3ug">Youtube</a>.</p>

<div class="fluidMedia" style="width:100%;">
  <iframe src="https://www.youtube-nocookie.com/embed/pYW-9tvx3ug" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
.fill {object-fit: fill;}
.contain {object-fit: contain;}
.cover {object-fit: cover;}
.scale-down {object-fit: scale-down;}
.none {object-fit: none;}
img {
  width: 100%;
  height: auto;
}

.fluidMedia {
    position: relative;
    padding-bottom: 56.25%; /* proportion value to aspect ratio 16:9 (9 / 16 = 0.5625 or 56.25%) */
    height: 0;
    overflow: hidden;
}

.fluidMedia iframe {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
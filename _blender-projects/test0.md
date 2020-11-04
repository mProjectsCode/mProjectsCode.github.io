---
layout: post
title: "Hexagons"
date: 2020-04-14
img: "/recources/hex4k.png"
---

<img src="{{page.img}}" alt="drawing"/>
sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
<br>
<pre class="prettyprint code"><code>$(function(){
	$("pre").hover(function() {
		var codeInnerWidth = $("code", this).width() + 10;
		if (codeInnerWidth > 500) {
			$(this).stop(true, false).css({zIndex:"99",position:"relative",overflow:"hidden"}).animate({width:codeInnerWidth+"px"});
		}
	}, function() {
		$(this).stop(true, false).animate({width:500});
	});
});
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a</code></pre>

This is a wonderfull piece of code written in JS to test the codeblock.

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
</style>

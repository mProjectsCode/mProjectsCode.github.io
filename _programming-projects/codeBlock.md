---
layout: post
title: "Creating a Codeblock with HTML and CSS"
date: 2021-02-12
---

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

This is a wonderful piece of code written in JS to test the code block.
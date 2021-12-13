---
layout: post
title: "Developing my own Fractal Renderer"
date: 2021-09-18
---

<img src="/recources/art-images/mandelbulb/mandelbulb_1920x1080.png" alt="drawing"/>

In this blog post I will talk about how I wrote my own real-time Fractal Renderer within the Game Engine <a herf="https://unity.com/">Unity</a>.
For that, I wrote my own implementation of the Sphere Tracing algorithm as an HLSL pixel shader, which allows real-time results.

What is Sphere Tracing you probably ask yourself now? Well, let me explain.

The Sphere Tracing algorithm is a way to render Objects in a 3D space. 
It is based on a so-called Signed Distance Function (SDF).
The SDF takes in a point in space and returns the Distance to the closest surface.
For example, this is an SDF for a Sphere with a radius of 1.

<pre class="prettyprint code">
<code>float SphereSDF(float3 p)
{
    return length(p) - 1f;
}
</code></pre>

To actually render anything with this function we send out rays from the camera through every pixel of the final image.
Then we look along this ray if and when it hits a surface.
To do that we call the SDF and pass it the starting point of our ray.
Since the SDF by definition gives us the distance to the nearest surface we can be sure to move our starting point forward that distance along the ray, since there can not be any surface in the way.
We repeat this process of calling the SDF and moving our point along the ray until the return value of the SDF is smaller than the accuracy that we want to achieve or until the ray gets longer than the draw distance.
If the return value of the SDF is smaller than the accuracy then we know that we hit a surface at the position of the point we moved along the ray.
From here on out we can apply shading to turn our image from this to this:

<div class="row">
  <div class="column">
    <img src="/recources/images/Builds Screenshot 2019.11.20 - 16.52.28.69.png" alt="drawing"/>
  </div>
  <div class="column">
    <img src="/recources/images/Builds Screenshot 2019.11.20 - 16.51.05.78.png" alt="drawing"/>
  </div>
</div>

After that, we can also apply some simple Ambient Occlusion:

<div class="row">
  <div class="column">
    <img src="/recources/images/Builds Screenshot 2019.11.20 - 16.47.59.18.png" alt="drawing"/>
  </div>
  <div class="column">
    <img src="/recources/images/Builds Screenshot 2019.11.20 - 16.45.22.96.png" alt="drawing"/>
  </div>
</div>

And now we can also render other objects and fractals. For example, the Julia fractal but three dimensional:

<img src="/recources/art-images/julia_3d/julia_3d_1920x1080.png" alt="drawing"/>

But even though I use GPU computing I run into performance issues with the Julia fractal.

I am currently working on a stand-alone version that uses the CPU for higher accuracy computing.


<style>
.fill {object-fit: fill;}
.contain {object-fit: contain;}
.cover {object-fit: cover;}
.scale-down {object-fit: scale-down;}
.none {object-fit: none;}

.column {
  float: left;
  width: 50%;
  padding: 0px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

img {
  width: 100%;
  height: auto;
}
</style>
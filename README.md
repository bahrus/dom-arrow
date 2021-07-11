[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/dom-arrow)
# dom-arrow

<a href="https://nodei.co/npm/ib-id/"><img src="https://nodei.co/npm/dom-arrow.png"></a>

<img src="https://badgen.net/bundlephobia/minzip/dom-arrow">

dom-arrow is a web component wrapper around the [leader-line npm package](https://www.npmjs.com/package/leader-line).

The name / idea of this web component was inspired by [this library](https://www.cssscript.com/connect-elements-directional-arrow/) which helpfully [links](https://www.cssscript.com/draw-svg-paths-two-elements-leader-line/) to a [rather powerful library](https://www.npmjs.com/package/leader-line).

## Sample syntax

```html
<div id=start>Hello</div>
<p>
    Euclid [described](https://en.wikipedia.org/wiki/Line_(geometry)) a line as "breathless length" which "lies equally with respect to the points on itself"; 
    he introduced several postulates as basic unprovable properties from which he constructed all of geometry, 
    which is now called Euclidean geometry to avoid confusion with other geometries which 
    have been introduced since the end of the 19th century (such as non-Euclidean, projective and affine geometry).
</p>
<div id=end>Goodbye</div>
```

## Demo

[Codepen demo](https://codepen.io/bahrus/pen/LYybPVP)


<!--
```
<custom-element-demo>
<template>
<div id=start>Hello</div>
<p>
    Euclid [described](https://en.wikipedia.org/wiki/Line_(geometry)) a line as "breathless length" which "lies equally with respect to the points on itself"; 
    he introduced several postulates as basic unprovable properties from which he constructed all of geometry, 
    which is now called Euclidean geometry to avoid confusion with other geometries which 
    have been introduced since the end of the 19th century (such as non-Euclidean, projective and affine geometry).
</p>
<div id=end>Goodbye</div>
<dom-arrow connect=#start to=#end color=green></dom-arrow>
<script type=module crossorigin>
    import 'https://cdn.skypack.dev/dom-arrow@0.0.1?min'
</script>
</template>
</custom-element-demo>
</template>
</custom-element-demo>
```
-->


## Running locally

1.  Do a git clone or a git fork of repository https://github.com/bahrus/dom-arrow
2.  Install node.js
3.  Run "npm install" from location of folder created in step 1.
4.  Run npm run serve.  Open browser to http://localhost:3030/demo/dev.html






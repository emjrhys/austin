<template lang='pug'>
div#app
  router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html, body {
  font-size: 16px;
}

body {
  background-color: #f7f0ec;
  color: #071108;

  font-family: 'Roboto', sans-serif;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1, h2, h3 {
  font-family: 'Lexend Deca', sans-serif;
  font-weight: bold;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

.title-card {
  position: relative;
  display: block;
  height: 10rem;

  background-position: center center;
  background-size: cover;

  color: #fff;
  text-decoration: none;
  font-weight: bold;

  cursor: pointer;

  .back {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, .5);
    font-size: 2rem;
  }
}
</style>

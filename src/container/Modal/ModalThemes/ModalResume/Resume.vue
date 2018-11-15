<template>
  <article
    ref="resume"
    class="resume">
    <div class="oswald-bold resume-header">
      <h1>Jason Tseng</h1>
      <h2>Frontend Developer</h2>
    </div>
    <div class="resume-content">
      <h3>Education</h3>
      <p>
        National Taichung University of Science and Technology
      </p>
      <p>
        Computer Science 2009-2013
      </p>
      <h3>
        Skills
      </h3>
      <pre>
        JavaScript Framework
        Vue2
        React
        HTML5

        CSS3
        sass/scss
        stylus

        VR Framework
        Krpano
        A-Frame
        Three.js

        Server
        NodeJS, Apache, Nginx, Linux, AWS, GCP, Firebase, 3rd Party API, Restful API

        Others
        Git, Sketch, Emmet
      </pre>

      <h3>Experience</h3>
      <br>
      <h6 class="oswald-light">2017/02 - present</h6>
      <h4>iStaging - VR/AR for B2B2C solution</h4>
      <p>Handle a project TourRing with 90% code, based on AFrame, Vue2, Three.js, Stylus, Firebase, Agora(WebRTC SDK)</p>
      <p>Handle a project LiveTour with 85% code, based on Krpano, Vue2, Three.js, Stylus, Firebase, NodeJS</p>
      <p>Handle a project VREditor with 50% code, based on Vue2, Three.js, Stylus, Firebase</p>
      <br>
      <h6 class="oswald-light">2016/04 - 2017/01</h6>
      <h4>Nong Design - Case jobs for Wordpress website</h4>
      <p>Complete 9 projects in the company (I stay in Nong Design 9 months)</p>
      <p>Use Gulp, HTML, SCSS structure to complete static website</p>
      <p>Then process with PHP code to build a WordPress website</p>
      <p>Do lots of CSS animation on websites</p>
      <br>
      <h6 class="oswald-light">2014/08 - 2016/03</h6>
      <h4>Wethink</h4>
      <p>Case jobs for Software assistant and human resource</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../../../stylesheets/common';
@import '../../../../stylesheets/variables';

.resume {
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: $gray;
  overflow: hidden;
  box-shadow: 1px 1px 2px $gray;
}

.resume-header {
  background-color: $orange;
  color: $white;
  padding: 15px;
}

.resume-content {
  padding: 15px;
}
</style>

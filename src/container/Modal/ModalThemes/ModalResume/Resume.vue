<template>
  <article class="resume">
    <div class="resume-header">
      <h1>Jason Tseng</h1>
      <h2>Frontend Developer</h2>
    </div>
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

    <h6>2017/02 - present</h6>
    <h4>iStaging</h4>
    <h5>VR/AR for B2B2C solution</h5>

    <h6>2016/04 - 2017/01</h6>
    <h4>Nong Design</h4>
    <h5>Case jobs for Wordpress website</h5>

    <h6>2014/08 - 2016/03</h6>
    <h4>Wethink</h4>
    <h5>Case jobs for Software assistant and human resource</h5>
  </article>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../../../stylesheets/variables';

.resume {

}

.resume-header {
  background-color: $orange;
  color: $white;
}
</style>

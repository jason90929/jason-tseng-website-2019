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
      <h4>iStaging</h4>
      <p>VR/AR for B2B2C solution</p>
      <br>
      <h6 class="oswald-light">2016/04 - 2017/01</h6>
      <h4>Nong Design</h4>
      <p>Case jobs for Wordpress website</p>
      <br>
      <h6 class="oswald-light">2014/08 - 2016/03</h6>
      <h4>Wethink</h4>
      <p>Case jobs for Software assistant and human resource</p>
    </div>
  </article>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
export default {
  name: 'Resume',
  mounted () {
    VanillaTilt.init(this.$refs.resume, {
      max: 1
    })
  }
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

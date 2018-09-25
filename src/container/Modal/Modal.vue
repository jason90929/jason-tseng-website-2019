<template>
  <section class="modal">
    <slot></slot>
  </section>
</template>

<script>

export default {
  name: 'Modal'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../stylesheets/common';

.modal {
  @extend .absolute-full;
  @extend .flex-center-column;
  z-index: 6;
}
</style>

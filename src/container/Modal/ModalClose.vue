<template>
  <button
    class="modal-close"
    :aria-label="close"
    @click="closeModal">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ModalClose',
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../stylesheets/common';

.modal-close {
  @extend .position-fixed;
  @extend .flex-center;
  @extend .btn-no-default;
  right: 8px;
  top: 7px;
  padding: 10px;
  z-index: 2;

  .icon {
    $w: 20px;
    $h: 20px;
    bg-size($w, $h);
  }

  @media screen and (min-width: $response) {
    position: absolute;
  }
}

.modal-close-align {
  top: 0;
  right: 0;
}

.mobile-black-close-pc-close-with-gray-circle {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 5px;

  .icon {
    bg-size(13px, 13px);
  }

  @media screen and (min-width: $response) {
    top: -29px;
    right: -29px;
    padding: 0;

    .icon {
      bg-size(29px, 29px);
    }
  }
}
</style>

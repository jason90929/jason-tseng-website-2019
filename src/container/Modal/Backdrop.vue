<template>
  <div
    class="backdrop flex-center-column fixed-full"
    aria-label="close"
    @click.self="closeModal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
  mounted () {
    window.addEventListener('keydown', this.modalKeydown)
  },

  beforeDestroy () {
    window.removeEventListener('keydown', this.modalKeydown)
  },

  methods: {
    modalKeydown (e) {
      if (e.keyCode === 27) { // 27 = esc
        this.closeModal()
      }
    },

    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.backdrop {
  pointer-events: auto
}
</style>

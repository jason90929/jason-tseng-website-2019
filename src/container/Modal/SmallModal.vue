<template>
  <div class="small-modal-container">
    <div class="small-modal-inner">
      <figure class="text-group">
        <slot></slot>
      </figure>
      <div class="btn-group">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '../../components/Btn'

export default {
  name: 'SmallModal',
  components: {
    Btn
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../stylesheets/common.scss'
@import '../../stylesheets/variables.scss'

.small-modal-container {
  z-index: 6
  width: 270px
  height: 170px
  border-radius: 5px
  background-color: alpha($white, 90%)
  box-shadow: 0 2px 4px 0 alpha($black, 50%)
  backdrop-filter: blur(10px)
}

.small-modal-inner {
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  height: 100%
  margin: 0 15px
  padding: 20px 0 18px
}

>>> .text-group {
  h4, p {
    font-family: PingFangTC-Semibold
    font-weight: 600
    font-style: normal
    font-stretch: normal
    text-align: center
  }

  h4 {
    font-size: 17px
    letter-spacing: -.4px
    line-height: 24px
  }

  p {
    font-size: 14px
    line-height: 1.14
    letter-spacing: -.1px
  }

  h4 + p {
    margin-top: 6px
  }
}

>>> .btn-group {
  display: flex
  justify-content: center
  width: 100%

  > * + * {
    margin-left: 20px
  }
}

// Other custom css
.small-modal-no-buttons {
  width: 100%
  max-width: 400px
  height: auto

  .small-modal-inner {
    margin: 30px
    padding: 0
  }

  >>> .text-group {
    h4 + p {
      @extend .text-ml
      margin-top: 10px
    }

    p {
      font-family: PingFangTC-Regular
      text-align: start
    }
  }
}
</style>

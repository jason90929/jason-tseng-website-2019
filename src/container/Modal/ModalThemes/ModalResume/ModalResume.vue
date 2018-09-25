<template>
  <Modal>
    <Backdrop>
      <Resume></Resume>
    </Backdrop>
  </Modal>
</template>

<script>
import Backdrop from '../../Backdrop'
import Modal from '../../Modal'
import Resume from './Resume'

export default {
  name: 'ModalResume',
  components: {
    Backdrop,
    Modal,
    Resume
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

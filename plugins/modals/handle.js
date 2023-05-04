import ModalLayout from './ModalLayout'

// Cài đặt một plugin để xử lý với modal
const VModal = {
  install(Vue) {
    this.EventBus = new Vue()

    Vue.component('VueModal', ModalLayout)

    // Vue.prototype = this
    Vue.prototype.$modal = {
      open(params) {
        VModal.EventBus.$emit('open', params)
      },
      close(params) {
        VModal.EventBus.$emit('close', params)
      },
    }
  },
}

export default VModal

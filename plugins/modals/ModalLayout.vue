<template>
  <div modal="true">
    <div>
      <div v-if="visible" :name="name" class="modal">
        <div
          arial-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from './handle'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    }
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.payload = params.payload
        this.open()
      }
    })

    // close event
    VModal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close()
      }
    })
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

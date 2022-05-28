<template>
  <div id="upload-container" v-loading="loading">
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import UploadForm from './UploadForm.vue'
// import { defineAsyncComponent } from 'vue'
// const UploadForm = defineAsyncComponent(() => import('./UploadForm.vue'))

export default {
  components: {
    UploadForm,
  },
  data() {
    let loading = true
    let componentId = ''

    setTimeout(() => { this.componentId = 'UploadForm' })
    setTimeout(() => { this.loading = false }, 1000)
    
    return {
      loading,
      componentId,
    }
  },
  watch: {
    // 监视 录入的二维码，将其转换为数组格式
    "ruleForm.productQRCode": function (newValue, oldValue) {
      this.array = newValue.split(/[(\r\n)\r\n]+/);
      this.array.forEach((item, index) => {
        if (!item) {
          this.array.splice(index, 1);
        }
      });
    },
  },
  updated() {
    console.log('UploadMsg ===updated===')
  },
  unmounted() {
    console.log('UploadMsg ===unmounted===')
  },
}

</script>

<style lang="scss" scoped>
#upload-container {
  padding: 20px;
}
</style>
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

    setTimeout(() => {
      this.loading = false
      this.componentId = 'UploadForm'
    }, 1000);
    
    return {
      loading,
      componentId,
    }
  },
  updated() {
    console.log('===updated===')
    // this.componentId = 'UploadForm'
  },
  unmounted() {
    console.log('卸载')
  },
}

</script>

<style lang="scss" scoped>
#upload-container {
  padding: 20px;
}
</style>
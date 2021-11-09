<template>
  <div class="container-fluid nasa">
    <div class="row mt-3">
      <div class="col-12 text-center">
        <h2></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <Nasa/>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  setup() {
    name: 'Nasa'
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
</style>

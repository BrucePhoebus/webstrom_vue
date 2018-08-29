<template>
  <input type="text" class="input-search" placeholder="请输入搜索内容" v-model.trim="searchKey" @input="searchEvent" ref="searchInput" autocomplete="off" autocapitalize="off" autocorrect="off"/>
</template>

<script>
    export default {
      name: "InstantSearch",
      data() {

      }
    }
</script>

<style scoped>

</style>

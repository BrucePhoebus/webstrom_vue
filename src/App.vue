<template>
  <div id="app">
    <netBasic></netBasic>
    <router-view></router-view>
  </div>
</template>
<script>
  import netBasic from './components/netBasic/netBasic'
  export default {
    name: 'app',
    data: function () {
      return {

      }
    },
    components: {
      netBasic,
    }
  }
</script>

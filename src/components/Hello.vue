<template>
  <div id="didi-navigator">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="tab in tabs">
        {{ tab.text }}
      </li>
    </ul>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
  new Vue({
    el: '#didi-navigator',
    data: {
      tabs: [
        {text: '巴士'},
        {text: '快车'},
        {text: '专车'},
        {text: '顺风车'},
        {text: '出租车'},
        {text: '代驾'}
      ]
    }
  })
</script>

<script>
  export default {
    //相当于function data(){内容}
    data() {
      return {
        msg: "这是自定义的hello"
      }
    }
  }
</script>

<style>
  h1{
    color: #0000ed;
  }
</style>


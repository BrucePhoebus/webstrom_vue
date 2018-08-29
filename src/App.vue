<template>
  <div id="app">
    <ul>
      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data: function () {
      return {
        links: [
          {
            text: 'Home',
            route: '/Home'
          },
          {
            text: 'netBasic',
            route: '/netBasic'
          },
          {
            text: 'test',
            route: '/test'
          }
        ]
      }
    },
    components: {}
  }
</script>

<style>
  .text-center {
    text-align: center;
  }
  .spacing {
    margin-top: 30px;
  }
  .red {
    color: darkred;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
</style>

<template>
    <div>
      <h2 class="text-center">{{title}}</h2>
      <ul class="text-center spacing" style="padding: 0">
        <li v-for="item in lisks">
          <a @click="$goRoute(item.route)">{{item.text}}</a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "test",
      data() {
        return {
          title: '这是test页面-test文件下第一个页面',
          lisks: [
            {
              text: 'demo',
              route: '/demo'
            },
            {
              text: 'vif',
              route: '/vif'
            },
            {
              text: 'von',
              route: '/von'
            },
            {
              text: 'netBasic',
              route: '/netBasic'
            },
            {
              text: 'return',
              route: '/Home'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>

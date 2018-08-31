<template>
  <div class="netBasic">
    <!--<h2 class="text-center">{{title}}</h2>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in lisks">
        <a @click="$goRoute(item.route)">{{item.text}}</a>
      </li>
    </ul>-->
    <router-view></router-view>
  </div>
</template>

<script>

    export default {
      name: "netBasic",

      data() {
        return {
          title: '这是netBasic页面-netBasic下第一个页面',
          lisks: [
            {
              text: 'navigation',
              route: '/navigation'
            },
            {
              text: 'netVueBasic',
              route: '/netVueBasic'
            },
            {
              text: 'InstantSearch',
              route: '/InstantSearch'
            },
            {
              text: 'return',
              route: '/Home'
            }
          ]
        }
      },

      component: {
      }
    }
</script>

<style scoped>

</style>

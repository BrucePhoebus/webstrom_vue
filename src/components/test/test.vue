<template>
    <div>
      <h2 class="text-center">{{title}}</h2>
      <ul class="text-center spacing" style="padding: 0">
        <li v-for="item in lisks">
          <a @click="$goRoute(item.route)">{{item.text}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "test",
      data() {
        return {
          title: '这是v-if页面-test下第一个页面',
          lisks: [
            {
              text: 'v-if',
              route: '/test/vif'
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

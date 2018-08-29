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
      name: "InstantSearch",
      data() {
        return {
          title: '这是InstantSearch页面-netVueBasic下的即时搜索页面',
          lisks: [
            {
              text: 'InstantSearch',
              route: '/netBasic/InstantSearch'
            },
            {
              text: 'end',
              route: '/netBasic/end'
            },
            {
              text: 'return',
              route: '/Home'
            }
          ],
        }

      }
    }
</script>

<style scoped>

</style>

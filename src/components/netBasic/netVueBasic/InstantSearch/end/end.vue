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
      name: "end",
      lisks: [
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
</script>

<style scoped>

</style>

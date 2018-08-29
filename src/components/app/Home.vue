<template>
  <div class="Home">
    <div class="div1">
      <ul>
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ul>
    </div>
    <div class="div2">
      <ul>
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ul>
    </div>
    <div class="div3">
      <ul>
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        numbers: [ 1, 2, 3, 4, 5 ],
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
    }
  }
</script>

<style scoped>
  .Home {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #6d7885;
  }

  .div1,.div2,.div3 {
    height: 33.3%;
    background-color: #0000ed;
  }
</style>

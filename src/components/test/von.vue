<template>
  <div id="von">
    <div>
      <button @click="greet">Greet</button>
    </div>
    <div>
      <button @click="say('hello!', $event)">Submit</button>
    </div>
    <div>
      <!-- 阻止单击事件冒泡 -->
      <a @click.stop="doThis"></a>
      <!-- 提交事件不再重载页面 -->
      <form @submit.prevent="onSubmit"></form>
      <!-- 修饰符可以串联 -->
      <a @click.stop.prevent="doThat"></a>
      <!-- 只有修饰符 -->
      <form @submit.prevent></form>
    </div>
    <div>
      <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
      <input @keyup.13="submit"><br/>
      <!-- 同上 -->
      <input @keyup.enter="submit">
    </div>
  </div>
</template>

<script>
  export default {
    name: "von",
    data: {
      name: 'Vue.js',
      msg: '',
    },
    // 在 'methods' 对象中定义方法
    methods: {
      greet: function (event) {
        // 方法内 'this'指向 vm
        alert('Hello ' + this.name + '!');
        // 'event' 是原生 DOM 事件
        alert(event.target.tagName)
      },
      say: function (msg, event) {
        // 现在我们可以访问原生事件对象
        event.preventDefault();
        alert(event.target.tagName + ": " + msg);
      },
    }
  }
</script>

<style scoped>

</style>

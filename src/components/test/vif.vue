<template>
  <div class="vif">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in lisks"><a @click="a(item.route)">{{item.text}}</a></li>
    </ul>
    <router-link :to="'/netBasic'">netBasic</router-link>
    <router-link :to="{ path: '/netBasic' }">netBasic</router-link>
    <!--<div>
      <div v-if="show" transition="my-transition"></div>
    </div>
    <div>
      <div v-if="show" v-transition="expand">hello</div>
    </div>
    <div v-for="list" transition stagger="100"></div>
    <div id="demo">
      <input v-model="query">
      <ul>
        <li v-for="item in list | filterBy query"
            transition="staggered"
            stagger="100">
          {{item.msg}}
        </li>
      </ul>
    </div>-->
    <!--<div id="demo">
      <button @click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "vif",
    data: function() {
      return {
        title: '这是vif页面-test页面下的vif',
        lisks: [
          {
            text: 'demo',
            route: '/demo'
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
    },
    methods: {
      a: function (index) {
        this.$router.push(index);
      }
    }
  }
  //提供 JavaScript 钩子
 /* Vue.transition('expand', {
    beforeEnter: function (el) {
      el.textContent = 'beforeEnter'
    },
    enter: function (el) {
      el.textContent = 'enter'
    },
    afterEnter: function (el) {
      el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
      // handle cancellation
    },
    beforeLeave: function (el) {
      el.textContent = 'beforeLeave'
    },
    leave: function (el) {
      el.textContent = 'leave'
    },
    afterLeave: function (el) {
      el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
      // handle cancellation
    }
  });*/
/*
  Vue.transition('stagger', {
    stagger: function (index) {
      // 每个过渡项目增加 50ms 延时
      // 但是最大延时限制为 300ms
      return Math.min(300, index * 50)
    }
  });*/
</script>

<style scoped>
  /* 必需 */
  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }

  /* .expand-enter 定义进入的开始状态 */
  /* .expand-leave 定义离开的结束状态 */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
  }

  .staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
  }

  .staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

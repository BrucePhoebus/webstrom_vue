<template>
  <div>
    <div>
      <h2 class="text-center">{{title}}</h2>
    </div>
    <!--即时搜索-->
    <div id="net-basic">
      <form v-cloak>
        <div class="bar">
          <input type="text" v-model="searchString" placeholder="请输入你的搜索词..."/>
        </div>

        <!-- searchString为函数参数 -->
        <ul>
            <li v-for="item in articles">
              <div v-show="item.isTrue">
                <a target="_blank" v-bind:href="item.url">
                  <img v-bind:src="item.image"/>
                  <p>{{item.title}}</p>
                </a>
              </div>
            </li>
          <!--
            <li v-for="item in result">
              <div v-show="item.isTrue">
                <a target="_blank" v-bind:href="item.url">
                  <img v-bind:src="item.image"/>
                  <p>{{item.title}}</p>
                </a>
              </div>
            </li>-->
        </ul>
      </form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "netVueBasic",
    data() {
      return {
        title: '这是netVueBasic页面-netBasic下的即时搜索页面',
        searchString: '',
        result: [],
        count: 0,
        articles: [
          {
            title: "What You Need To Know About CSS Variables --abc",
            url: "https://www.baidu.com/",
            isTrue: true,
            image: "../../../static/netVueBasic/images/demo01.jpg"
          },
          {
            title: "Freebie: 4 Great Looking Pricing Tables--abcd",
            url: "https://www.google.com/",
            isTrue: true,
            image: "../../../static/netVueBasic/images/demo02.jpg"
          },
          {
            title: "20 Interesting JavaScript and CSS Libraries for February 2016--abcd",
            url: "https://www.sougou.com/",
            isTrue: true,
            image: "../../../static/netVueBasic/images/demo.jpg"
          }
        ],
      }
    },

    methods: {
      articleFilter: function () {
        let value = this.searchString;
        value = value.trim().toLowerCase();
        let _count = this.count;
        // filter()方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
        this.articles.filter(function (item) {
          // 如果搜索词被包含,则返回匹配的内容
          if (item.title.toLowerCase().indexOf(value) === -1) {
            item.isTrue = false;
            _count++;
          }
        });
        this.count = _count;
      },
      /*articleFilter: function (value) {
        let _result = this.result;
        value = value.trim().toLowerCase();
        // filter()方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
        _result = this.articles.filter(function (item) {
          // 如果搜索词被包含,则返回匹配的内容
          if (item.title.toLowerCase().indexOf(value) !== -1) {
            return = item;
          }
        });
        if (_result)
          console.log(_result[0].title);

        return _result;

      },*/
      /*GoTo: function (url) {
        window.location.href = url;
      }*/
    },

    watch: {
      searchString: function (newValue, oldValue) {
        if(newValue.length<oldValue.length) {
          this.count = 0;
          for (var i in this.articles) {
            this.articles[i].isTrue = true;
          }
          this.articleFilter();
        }
        if(!this.searchString) {
          for (var i in this.articles) {
            this.articles[i].isTrue = true;
          }
          this.count = 0;
          return 0;
        } else {
          this.articleFilter();
        }
      }

    }
  };


  /*Vue.filter('articleFilter', function (title, value) {
  var result = [];

  if (!value) {
    return;
  }
  value = value.trim().toLowerCase();

  // filter()方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
  result = this.articles.filter(function (item) {
    // 如果搜索词被包含,则返回匹配的内容
    if (item.title.toLowerCase().indexOf(value) !== -1) {
      return item;
    }
  });

  return result;
})*/
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font: 15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align: center;
  }

  section, footer, header, aside, nav {
    display: block;
  }

  .bar {
    background: #5c9bb7;

    background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: linear-gradient(top, #5c9bb7, #5392ad);

    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    width: 400px;
    padding: 14px;
    margin: 45px auto 20px;
    position: relative;
  }

  .bar input {
    background: #fff no-repeat 13px 13px;
    /*background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);*/

    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
  }

  ul {
    list-style: none;
    width: 428px;
    margin: 0 auto;
    text-align: left;
  }

  ul li {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
    border: none;
  }

  ul li img {
    width: 60px;
    height: auto;
    float: left;
  }

  ul li p {
    margin-left: 75px;
    font-weight: bold;
    padding-top: 12px;
    color: #6e7a7f;
  }
</style>

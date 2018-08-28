<template>
  <div id="vfor">
    <ul id="for-list" class="wjjtest">
      <li v-for="obj in people">
        {{ obj }}
      </li>
    </ul>
    <hr>
    <!--组件循环调用-->
    <!--<li v-for="folder in folders">
      <tree-folder v-bind:folder="folder"></tree-folder>
    </li>-->
    <hr>
    <ul>
      <li v-for="(a, index) in b">
        {{ parentMessage }} - {{ index }} - {{ a.message }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'vfor',
    data: {
      b: [
        {message: 'haha'},
        {message: 'hehe'}
      ],
      parentMessage: 'Parent',
      folders: [
        {
          name: 'folder1',
          children: [{
            name: 'folder1 - folder1',
            children: [{
              name: 'folder1 - folder1 - folder1'
            }]
          }, {
            name: 'folder1 - folder2',
            children: [{
              name: 'folder1 - folder2 - folder1'
            }, {
              name: 'folder1 - folder2 - folder2'
            }]
          }]
        },
        {
          name: 'folder 2',
          children: [{
            name: 'folder2 - folder1',
            children: [{
              name: 'folder2 - folder1 - folder1'
            }]
          }, {
            name: 'folder2 - folder2',
            children: [{
              name: 'folder2-content1'
            }]
          }]
        },
        {
          name: 'folder 3',
          children: [{
            name: 'folder3 - folder1',
            children: [{
              name: 'folder3 - folder1 - folder1'
            }]
          }, {
            name: 'folder3 - folder2',
            children: [{
              name: 'folder3-content1'
            }]
          }]
        }
      ]
    }
  }
</script>

<style scoped>

</style>

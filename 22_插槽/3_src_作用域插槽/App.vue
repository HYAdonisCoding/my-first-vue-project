<template>
  <div class="container">


    <Category title="游戏">
      <template scope="{games}">
        
         <!--这里data为插槽给你传递的对象包含你所需要的数据 包装成对象的原因就是你当时可能个插槽传递了多个数据-->
        <div>
          <!-- <span>{{ games }}</span> -->
          <ul >
            <li v-for="item, idx in games" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </template>
      
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com" >单机游戏</a>
        <a href="http://www.baidu.com" >网络游戏</a>
      </div>
      
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        
         <!--这里data为插槽给你传递的对象包含你所需要的数据 包装成对象的原因就是你当时可能个插槽传递了多个数据-->
        <div>
          <!-- <span>{{ games }}</span> -->
          <ul >
            <ol v-for="item, idx in games" :key="idx">{{ item }}</ol>
          </ul>
        </div>
      </template>
      
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com" >单机游戏</a>
        <a href="http://www.baidu.com" >网络游戏</a>
      </div>
      
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        
         <!--这里data为插槽给你传递的对象包含你所需要的数据 包装成对象的原因就是你当时可能个插槽传递了多个数据-->
        <div>
          <!-- <span>{{ games }}</span> -->
          <ul >
            <h5 v-for="item, idx in games" :key="idx">{{ item }}</h5>
          </ul>
        </div>
      </template>
      
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com" >单机游戏</a>
        <a href="http://www.baidu.com" >网络游戏</a>
      </div>
      
    </Category>

    
  </div>
</template>

<script>
import Category from './components/Category';

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    Category,
  },
  methods: {
    
  },
  
};
</script>

<style>
   .container, .foot {
     display: flex;
     justify-content: space-around;
   }
   video {
     width: 100%;
   }
   img {
     width: 100%;
   }
   h4 {
    text-align: center;
    background: magenta;
   }
</style>
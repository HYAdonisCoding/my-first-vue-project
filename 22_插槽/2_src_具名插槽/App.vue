<template>
  <div class="container">
    <Category title="美食" >
      <img slot="center" src="https://t7.baidu.com/it/u=3635362084,1992212334&fm=193&f=GIF" alt="delicious food">
      <a href="http://www.baidu.com" slot="footer" class="foot">百度</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="item, idx in games" :key="idx">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com" >单机游戏</a>
        <a href="http://www.baidu.com" >网络游戏</a>
      </div>
      
    </Category>

    <Category title="电影">
      <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer >
        <div class="foot">
          <a href="http://www.baidu.com" >经典</a>
          <a href="http://www.baidu.com" >热门</a>
          <a href="http://www.baidu.com" >推荐</a>

        </div>
        <h4>快来观影吧！</h4>
      </template>
      
      
    </Category>
    
  </div>
</template>

<script>
import Category from './components/Category';

export default {
  name: "App",
  data() {
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
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
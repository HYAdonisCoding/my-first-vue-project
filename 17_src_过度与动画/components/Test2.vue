<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--transition 只能包裹一个元素而transition-group可以包含多个元素-->
    <transition-group name="hello" appear>
        <h1 v-show="isShow" key="1">你好,</h1>
        <h1 v-show="isShow" key="2">北京</h1>
    </transition-group>
    
  </div>
</template>

<script>
export default {
    name: 'Test2',
    data() {
        return {
            isShow: true,
        }
    },
}
</script>

<style>
  h1 {
    background: orange;
  }
  /*进入的起点，离开的终点*/
  .hello-enter, .hello-leave-to {
    transform: translateX(-100%);
  }
  /*进入的过程，离开的过程*/
  .hello-enter-active, .hello-leave-active {
    transition: linear 0.5s;
  }
  /*进入的终点,离开的起点*/
  .hello-enter-to, .hello-leave {
    transform: translateX(0);
  }
  /* .v-enter-active {
    animation: anim 0.25s linear;
  }

  .v-leave-active {
    animation: anim 0.25s linear reverse;
  } */

  /* .hello-enter-active {
    animation: anim 0.25s linear;
  }

  .hello-leave-active {
    animation: anim 0.25s linear reverse;
  } */

  /* @keyframes anim {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
  } */
</style>
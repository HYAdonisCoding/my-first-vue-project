<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
    
  </div>
</template>

<script>
export default {
    name: 'Test',
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

  /* .v-enter-active {
    animation: anim 0.25s linear;
  }

  .v-leave-active {
    animation: anim 0.25s linear reverse;
  } */

  .hello-enter-active {
    animation: anim 0.25s linear;
  }

  .hello-leave-active {
    animation: anim 0.25s linear reverse;
  }

  @keyframes anim {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
  }
</style>
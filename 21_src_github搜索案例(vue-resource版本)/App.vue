<template>
  <div class="app">
    <Search/>
    <list/>
  </div>
</template>

<script>
import List from './components/List';
import Search from './components/Search';

export default {
  name: "App",
  data() {
    return {
      todos: [],
    }
  },
  components: {
    Search,
    List
  },
  methods: {
    
  },
  
};
</script>

<style>

</style>
<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo" style="align: center" />
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList
            :todos="todos"
        />
        <MyFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllDoneTodo="clearAllDoneTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";
import pubsub from 'pubsub-js';

export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    // 勾选取消勾选
    checkTodo(_, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除
    deleteTodo(_, id) {
      this.todos = this.todos.filter(todo =>  todo.id !== id);
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => todo.done = done);
    },
    // 清除已完成
    clearAllDoneTodo() {
      this.todos = this.todos.filter(todo =>  !todo.done);
    },
  },
  watch:{ 
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      }
    },
  },
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  //已挂载再绑定事件总线
  mounted() {
    // this.$bus.$on('checkTodo', this.checkTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.checkTodoId = pubsub.subscribe('checkTodo', this.checkTodo)
    this.deleteTodoId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    // this.$bus.$off('checkTodo')
    // this.$bus.$off('deleteTodo')
    pubsub.unsubcribe(this.checkTodoId)
    pubsub.unsubcribe(this.deleteTodoId)
  }
};
</script>

<style>
/*
   全局的样式是不需要加scoped
   全局共享
   */

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
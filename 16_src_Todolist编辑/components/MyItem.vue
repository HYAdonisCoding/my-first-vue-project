<template>
  <li>
    <label>
<!--      这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input type="checkbox" :checked="todo.done" @change="handelCheck(todo.id)"/>
      <!--v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据)-->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{  todo.title }}</span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleUpdate(todo)">编辑</button>

  </li>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'MyItem',
    props: ['todo', ],
    methods: {
      // 勾选or取消勾选
      handelCheck(id) {
        // 通知app组件将对应的done值取反
        // this.checkTodo(id);
        // this.$bus.$emit('checkTodo', id)
        pubsub.publish('checkTodo', id);
      },
      // 删除
      handleDelete(id) {
        if (confirm(`确认要删除'${this.todo.title}'吗？`)) {
          console.log(id);
          // this.deleteTodo(id)
          // this.$bus.$emit('deleteTodo', id)
          pubsub.publish('deleteTodo', id);
        }
        
      },
      // 编辑
      handleUpdate(todo, e) {
        if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
          todo.isEdit = true;
        } else {
          this.$set(todo, 'isEdit', true);//保证初次加入的时候存在响应式的数据
        }
        //自动获取焦点
        this.$refs.inputTitle.focus();
        this.$nextTick(() => {
          //这里的回调函数注意是在dom节点下一次被更新之后才会运行的
          this.$refs.inputTitle.focus();
        })
        
        // console.log(todo)
      },
      //失去焦点回调
      handleBlur(todo, e) {
        todo.isEdit = false;//注意我在这里确保你身上一定存在isEdit属性
        if (!e.target.value.trim()) return alert('输入不能为空!');
        this.$bus.$emit('updateTodo', todo.id, e.target.value.trim());
      },
    },
}
</script>


<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background: #ddd;
}

li:hover button{
  display: block;
}
li span {
  padding-left: 5px;
}
</style>
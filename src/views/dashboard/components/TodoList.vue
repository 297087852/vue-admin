<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="Todo List" @change="handleAddTodo" />
    </div>

    <div class="todo-main">
      <ul>
        <li
          :class="['todo-item', { done: todo.done }]"
          v-for="(todo, index) in filterTodoList"
          :key="index"
        >
          <input
            type="checkbox"
            class="todo-checkbox"
            :checked="todo.done"
            @change="hanleChange(todo)"
          />
          <span class="todo-text">{{ todo.text }}</span>
          <a class="todo-delete" @click="handleDelete(index)">×</a>
        </li>
      </ul>
    </div>

    <div class="todo-footer">
      <div class='remaining-count' v-if="ActiveTodos.length">{{ActiveTodos.length}} item left</div>
      <ul class="filter-list">
        <li
          :class="['filter-list-item', {selected: filter === visibility}]"
          v-for="filter in filters"
          :key="filter"
          @click="handleFilter(filter)"
        >
          {{ filter }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',

  data () {
    const todoList = [
      {
        text: '起床',
        done: true
      },
      {
        text: '吃饭',
        done: true
      },
      {
        text: '学习js',
        done: false
      },
      {
        text: '学习webpack',
        done: false
      },
      {
        text: '休息',
        done: true
      }
    ]

    return {
      visibility: 'All',
      filters: ['All', 'Active', 'Completed'],
      todoList
    }
  },

  computed: {
    filterTodoList () {
      let list
      switch (this.visibility) {
        case 'All':
          list = this.todoList
          break
        case 'Active':
          list = this.todoList.filter(todo => !todo.done)
          break
        case 'Completed':
          list = this.todoList.filter(todo => todo.done)
          break
      }
      return list
    },

    ActiveTodos () {
      return this.todoList.filter(todo => !todo.done)
    }
  },

  methods: {
    handleAddTodo (e) {
      const value = e.target.value
      if (value.trim()) {
        this.todoList = [...this.todoList, { text: value, done: false }]
      }

      e.target.value = ''
    },

    hanleChange (todo) {
      todo.done = !todo.done
    },

    handleFilter (visibility) {
      this.visibility = visibility
    },

    handleDelete (index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.todo-header {
  padding: 10px 20px;
  input {
    width: 100%;
    appearance: none;
    border: 0;
    outline: none;
  }
}
.todo-main {
  .todo-item {
    position: relative;
    &.done {
      .todo-text {
        color: #ddd;
        text-decoration: line-through;
      }
    }
    .todo-checkbox {
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      appearance: none;
      border: 1px solid #ccc;
      outline: none;
      &::after {
        content: '';
        display: block;
        width: 10px;
        height: 5px;
        margin-left: 3px;
        margin-top: 4px;
        border-left: 2px solid #13ce66;
        border-bottom: 2px solid #13ce66;
        transform: rotate(-45deg) scale(0);
        transition: all 0.18s ease-in;
      }
      &:checked {
        &::after {
          transform: rotate(-45deg) scale(1);
        }
      }
    }
    .todo-text {
      word-break: break-all;
      border-bottom: 1px solid #ededed;
      display: block;
      padding: 10px 30px 10px 40px;
    }
    .todo-delete {
      position: absolute;
      top: 0;
      right: 5px;
      bottom: 0;
      margin: auto 0;
      text-align: center;
      width: 30px;
      height: 30px;
      color: #aaa;
      cursor: pointer;
      font-size: 24px;
    }
  }
}
.todo-footer {
  color: #aaa;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
  padding: 0 15px;
  box-shadow:
    0 1px 0 0 rgba(0, 0, 0, .1),
    0 10px 0 -5px #efefef,
    0 11px 2px -5px #ccc,
    0 21px 0 -10px #efefef,
    0 22px 2px -10px #ccc;
  .remaining-count {
    float: left;
  }
  .filter-list-item {
    display: inline;
    margin: 0 2px;
    padding: 0 2px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    &.selected, &:hover {
      border-color: #eee;
    }
  }
}
</style>

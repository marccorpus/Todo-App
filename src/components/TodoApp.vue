<template>
  <b-container>
    <b-row>
      <b-col md="8" offset-md="2">
        <b-card class="main-card">
          <h2 class="text-center">What's the Plan for Today?</h2>

          <TodoForm />

          <Todos v-if="!selectedTodo" @select-todo="selectTodo" />

          <TodoForm
            v-else
            :selected-todo="selectedTodo"
            @select-todo="selectTodo"
          />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import Todos from "./Todos.vue";

export default {
  data() {
    return {
      selectedTodo: null,
    };
  },
  methods: {
    selectTodo(todo) {
      this.selectedTodo = todo;
    },
  },
  components: {
    TodoForm,
    Todos,
  },
};
</script>

<style scoped>
.main-card {
  background: #161a2b;
  min-height: 400px;
  border-radius: 10px;
}
</style>

<template>
  <transition-group name="list">
    <b-card
      v-for="todo in todos"
      :key="todo.id"
      class="todo bg-primary mt-3"
      :class="{ completed: todo.isComplete }"
    >
      <b-row>
        <b-col md="9">{{ todo.description }}</b-col>
        <b-col md="3" class="text-center">
          <span
            v-b-tooltip.hover
            title="Mark as Completed"
            v-if="!todo.isComplete"
          >
            <BIconCheckCircle class="icon" @click="toggleTodo(todo.id)" />
          </span>
          <span v-b-tooltip.hover title="Mark as Incomplete" v-else>
            <BIconXCircle class="icon" @click="toggleTodo(todo.id)" />
          </span>

          <span v-b-tooltip.hover title="Edit">
            <BIconPencilSquare class="icon" @click="$emit('select-todo', todo)"
          /></span>

          <span v-b-tooltip.hover title="Delete">
            <BIconTrash class="icon" @click="deleteTodo(todo.id)" />
          </span>
        </b-col>
      </b-row>
    </b-card>
  </transition-group>
</template>

<script>
import {
  BIconCheckCircle,
  BIconXCircle,
  BIconPencilSquare,
  BIconTrash,
} from "bootstrap-vue";

export default {
  emits: ["select-todo"],
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {
    toggleTodo(id) {
      this.$store.dispatch("toggleTodo", { id });
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", { id });
    },
  },
  components: {
    BIconCheckCircle,
    BIconXCircle,
    BIconPencilSquare,
    BIconTrash,
  },
};
</script>

<style scoped>
.todo {
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
}
.todo.completed {
  opacity: 0.4;
  text-decoration: line-through;
}
.todo:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
}
.todo:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  );
}
.todo:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}
.icon {
  cursor: pointer;
  margin: 0 5px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

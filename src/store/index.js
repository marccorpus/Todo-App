export default {
  state() {
    return {
      todos: [],
    };
  },
  actions: {
    addTodo(context, payload) {
      context.commit("addTodo", payload);
    },
    editTodo(context, payload) {
      context.commit("editTodo", payload);
    },
    deleteTodo(context, payload) {
      context.commit("deleteTodo", payload);
    },
    toggleTodo(context, payload) {
      context.commit("toggleTodo", payload);
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload];
    },
    editTodo(state, payload) {
      const selectedIndex = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );

      state.todos[selectedIndex] = payload;
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    toggleTodo(state, payload) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
};

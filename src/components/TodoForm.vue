<template>
  <b-form @submit.prevent="submit">
    <b-form-row>
      <b-col md="10" offset-md="1">
        <b-input-group class="mt-4">
          <b-form-input
            v-model.trim="description"
            :state="isValid"
            class="input shadow-none"
            placeholder="Add a todo"
            autocomplete="off"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              type="submit"
              variant="info"
              class="btn shadow-none"
              :class="buttonClass"
              >{{ buttonCaption }}</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
export default {
  props: ["selectedTodo"],
  emits: ["select-todo"],
  data() {
    return { isValid: null, description: this.selectedTodo?.description || "" };
  },
  computed: {
    formMode() {
      return !this.selectedTodo ? "Add" : "Edit";
    },
    buttonCaption() {
      return this.formMode === "Add" ? "Add Todo" : "Update";
    },
    buttonClass() {
      return { edit: this.formMode === "Edit" };
    },
  },
  methods: {
    submit() {
      this.isValid = null;

      if (this.description.length === 0) {
        this.isValid = false;
        return;
      }

      if (this.formMode === "Add") {
        const data = {
          id: new Date().toISOString(),
          description: this.description,
          isComplete: false,
        };

        this.$store.dispatch("addTodo", data);
      } else if (this.formMode === "Edit") {
        const data = {
          ...this.selectedTodo,
          description: this.description,
        };

        this.$store.dispatch("editTodo", data);

        this.$emit("select-todo", null);
      }

      this.description = "";
    },
  },
};
</script>

<style scoped>
.btn,
.btn:hover,
.btn:focus {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  border-color: #ced4da;
  border-radius: 0 0.25rem 0.25rem 0;
  color: #fff;
}
.btn.edit {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}
.input,
.input:focus,
.input:active {
  color: #fff;
  background-color: transparent;
  border-color: #ced4da;
}
</style>

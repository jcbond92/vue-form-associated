<template>
  <div ref="wrapper" class="input-wrapper">
    <label for="customInput">Custom Element Input</label>
    <!-- stop the native input event to to avoid sending undefined as the target value -->
    <!-- send a submit event on keydown.enter to let the form know to submit -->
    <input name="customInput" @keydown.enter="emitSubmit" @input.stop="emitInput"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      internals: undefined
    }
  },
  methods: {
    emitInput(e) {
      // set the internal value
      this.internals.setFormValue(e.target.value);

      // emit a custom event this way so you can access the value with e.details.value
      this.$refs.wrapper.dispatchEvent(new CustomEvent('input', {
        bubbles: true,
        composed: true,
        detail: {value: e.target.value}
      }));
      
    },
    emitSubmit() {
      let form = this.$refs.wrapper.getRootNode().host.closest("form");
      form.dispatchEvent(new Event("submit", { bubbles: true }));
    }
  },
  mounted() {
    // get the element internals to use later
    this.internals = this.$refs.wrapper.getRootNode().host.internals_;
  }
}
</script>

<style>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--input-gap);
  align-items: flex-start;
}

input {
  width: var(--input-width)
}
</style>
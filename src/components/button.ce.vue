<template>
  <div ref="wrapper" class="button-wrapper">
    <button name="customInput" :type="type" @keydown.enter="handleClick()" @click.stop="handleClick()">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  methods: {
    handleClick() {
      if (this.type === "submit") {
        let form = this.$refs.wrapper.getRootNode().host.closest("form");
        form.dispatchEvent(new Event("submit", { bubbles: true }));
      }

      this.$emit("click");
    }
  }
}
</script>

<style>
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    background-color: royalblue;
    color: white;
    cursor: pointer;
    transition: border-color 0.25s;
    width: var(--input-width)
  }

  button:hover {
    border-color: black;
  }
</style>
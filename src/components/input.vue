<template>
  <div ref="wrapper" class="input">
    <label for="customInput">Custom Element Input</label>
    <!-- stop the native input event to to avoid sending undefined values in e.detail.value-->
    <input name="customInput" @input.stop="emitInput"/>
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
      
    }
  },
  mounted() {
    // get the element internals to use later
    this.internals = this.$refs.wrapper.getRootNode().host.internals_;
  }
}
</script>
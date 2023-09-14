<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrapper">
      <label for="standardInput">Standard Input</label>  
      <input name="standardInput" />
    </div>
    <custom-input name="customInput" @input="handleInput" />
    <custom-button type="submit">submit</custom-button>
    <div><pre>{{ formData }}</pre></div>
  </form>
</template>

<script>
// import your component 
import "./components/input.js"
import "./components/button.js"
export default {
  data() {
    return {
      formData: ""
    }
  },
  methods: {
    handleInput(e) {
      console.log("customInput value:", e.detail.value)
    },
    handleSubmit(e) {
      const formData = new FormData(e.target);
      const data = {};
      formData.forEach((value, key) => data[key] = value);

      this.formData = JSON.stringify(data, null, 2)
      

    }
  }
}
</script>


<style>
:root {
  --input-gap: 0.25em;
  --input-width: 200px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--input-gap);
  align-items: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  gap: calc(3 * var(--input-gap));
}

input {
  width: var(--input-width);
}

pre {
  text-align: left;
}
</style>
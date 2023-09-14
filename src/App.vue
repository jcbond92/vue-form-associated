<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-wrapper">
      <label for="standardInput">Standard Input</label>  
      <input name="standardInput" />
    </div>
    <custom-input name="customInput" @input="handleInput" />
    <button type="submit">submit</button>
    <div><pre>{{ formData }}</pre></div>
  </form>
</template>

<script>
// import your component 
import "./components/input.js"
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

pre {
  text-align: left;
}
</style>
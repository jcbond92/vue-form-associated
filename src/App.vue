<template>
  <form @submit.prevent="handleSubmit">
    <div class="input">
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

      this.formData = JSON.stringify(data)
      

    }
  }
}
</script>
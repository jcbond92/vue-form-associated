import Button from './button.ce.vue'
import { defineCustomElement } from "vue";
export const CustomButton = defineCustomElement(Button);

export default (function () {
  if (customElements.get("custom-button") === undefined)
    customElements.define("custom-button", CustomButton);
})();
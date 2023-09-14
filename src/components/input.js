import Input from './input.ce.vue'
import { defineCustomElement } from "vue";
export const CInput = defineCustomElement(Input);

class CustomInput extends CInput {
  static formAssociated = true;
  constructor() {
    super();

    // we'll use this in the vue component
    this.internals_ = this.attachInternals();
  }
}

export default (function () {
  if (customElements.get("custom-input") === undefined)
    customElements.define("custom-input", CustomInput);
})();
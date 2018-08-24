import { FormGroupInput, Card, BaseDropdown, BaseButton, BaseCheckbox } from "../components/index";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component(FormGroupInput.name, FormGroupInput);
    Vue.component(Card.name, Card);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
  }
};

export default GlobalComponents;

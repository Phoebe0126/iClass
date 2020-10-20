import Vue from 'vue'
import { Form, Button, Field } from 'vant';
import { Toast } from 'vant';


Vue.use(Toast);
Vue.use(Field);
Vue.use(Form);
Vue.use(Button);
// Vue.use(Toast)
Vue.prototype.$toast = Toast;

export default Vue;
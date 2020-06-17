import Vue from '../../public/lib/vue.min';
import './index.less';
import child from './child';
import Bus from './bus';

Vue.component('father', {
  components: {
    child,
  },
  data() {
    return {
    };
  },
  methods: {
    sendToChild() {
      Bus.$emit('fromFather', 'hello son by click');
    },
  },
  created() {
    Bus.$emit('fromFather', 'hello son');
  },
  template: '<div class="father"><h1>father</h1><div ><button @click="sendToChild">发消息给儿子</button></div><child></child></div>',
});
const app = new Vue({
  el: '#app',
});


console.log(app);

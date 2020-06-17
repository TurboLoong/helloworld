import Vue from '../../public/lib/vue.min';
import '../../public/utils';

const events = new Vue();
// events._cacheTurbo = [];
// Vue.prototype.$emit = Vue.prototype.$emit.after(function cacheEvents(type, info) {
//   this._cacheTurbo[type] = info;
// });
// Vue.prototype.$on = Vue.prototype.$on.after(function cacheEvents(type, cb) {
//   if (this._cacheTurbo[type]) {
//     cb(this._cacheTurbo[type]);
//   }
// });
export default events;

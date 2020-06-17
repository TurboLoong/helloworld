import Bus from './bus';

export default {
  data() {
    return {
      info: '--',
    };
  },
  mounted() {
    Bus.$on('fromFather', (info) => {
      this.info = info;
    });
  },
  template: '<div class="child"><strong>fromFather:</strong>{{info}}</div>',
};

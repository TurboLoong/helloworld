import { getRandom } from './utils';

export default class LegoCharater {
    constructor({ character, actor }) {
        this.actor = actor;
        this.name = character;
        this.sayings = ["I haven't been given any funny quotes yet."];
    }
    saySomething() {
        return this.sayings[getRandom(0, this.sayings.length - 1)];
    }
}
/**
 * Created by TurboLoong on 2016/7/3.
 */
import LegoCharacter from "./LegoCharater.js";

export default class Benny extends LegoCharacter {
    constructor() {
        super({ actor: "Charlie Day", character: "Benny" });
        this.sayings = ["Spaceship", "Underwater spaceship", "You're really letting the oxygen out of my tank here!"];
    }
}
/**
 * Created by TurboLoong on 2016/7/3.
 */
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
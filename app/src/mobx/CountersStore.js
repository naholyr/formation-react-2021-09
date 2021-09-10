import { v4 as uuid } from "uuid";
import { makeObservable, observable, action, computed } from "mobx";

export class Counter {
  id = uuid();
  value = 0;

  constructor(initialValue = 0) {
    makeObservable(this, {
      value: observable,
      incr: action,
    });
    this.value = initialValue;
  }

  incr(step = +1) {
    this.value = this.value + step;
  }
}

export class CounterList {
  counters = [];

  constructor(counters = []) {
    makeObservable(this, {
      counters: observable,
      nbCounters: computed,
    });
  }

  get nbCounters() {
    return Object.keys(this.counters).length;
  }

  add(initialValue = 0) {
    this.counters.push(new Counter(initialValue));
  }

  remove(id) {
    this.counters = this.counters.filter((c) => c.id !== id);
  }
}

export const countersListStore = new CounterList();

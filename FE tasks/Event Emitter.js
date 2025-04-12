/*
* {
*   event1: [],
*   event2: []
* }
*/

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  publish(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    const callbacks = this.listeners[event];

    for (const callback of callbacks) {
      callback(payload);
    }
  }

  subscribe(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);

    // returns unsubscribe callback
    return () => {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }
}

const emitter = new EventEmitter();

const EVENT_ONE = 'eventOne';
const EVENT_TWO = 'eventTwo';
const PAYLOAD = 'payload';

const unsubscribeOne = emitter.subscribe(EVENT_ONE, (data) => {
  console.log(EVENT_ONE, 'sub one', data);
});

const unsubscribeOneMore = emitter.subscribe(EVENT_ONE, (data) => {
  console.log(EVENT_ONE, 'sub two', data);
});

const unsubscribeTwo = emitter.subscribe(EVENT_TWO, (data) => {
  console.log(EVENT_TWO, data);
});


console.log('first wave:');
emitter.publish(EVENT_ONE, PAYLOAD);
emitter.publish(EVENT_TWO, PAYLOAD);

unsubscribeTwo();

console.log('second wave:');
emitter.publish(EVENT_ONE, PAYLOAD);
emitter.publish(EVENT_TWO, PAYLOAD);

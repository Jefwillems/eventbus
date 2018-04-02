module.exports = createEventBus;

function createEventBus(args) {
  const bus = Object.create(null);
  bus.options = args;
  bus.events = Object.create(null);
  bus.subscribe = (event, cb) => {
    if (!bus.events[event]) {
      bus.events[event] = [];
    }
    bus.events[event].push(cb);
  };
  bus.dispatch = (event, data) => {
    if (!bus.events[event]) {
      throw new Error("event does not exist.");
    }
    bus.events[event].forEach(cb => {
      cb(data);
    });
  };
  return bus;
}

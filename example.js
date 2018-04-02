const EventBus = require("./eventbus")();

EventBus.subscribe("hello", function(data) {
  console.log(data);
});

EventBus.dispatch("hello", "Hello World!");

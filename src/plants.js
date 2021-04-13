// This function stores our state.
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();
const plant1 = storeState();
const plant2 = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const artificialLight = changeState("light")(1);
const sunlight = changeState("light")(5);

const playMusic = changeState("health")(5);
const massage = changeState("health")(1);

define(function (require, exports, module) {
  module.exports = { stateControl, changeState, feed, blueFood, hydrate, superWater, artificialLight, sunlight, playMusic, massage, plant1, plant2 }
});
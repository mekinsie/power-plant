const { stateControl, changeState, feed, blueFood, hydrate, superWater} = require('./../src/plants.js');


describe('changeState', () => {
  test('should increase property value', () => {
    let plant = {};
    expect(changeState("soil")(5)(plant)).toEqual({ soil: 5 });
  });
  test('it should increase soil by 1', () => {
    let plant = {};
    expect(feed(plant)).toEqual({ soil: 1 });
  });
  test('it should increase soil by 5', () => {
    let plant = {};
    expect(blueFood(plant)).toEqual({ soil: 5 });
  });
  test('it should increase water by 1', () => {
    let plant = {};
    expect(hydrate(plant)).toEqual({ water: 1 });
  });
  test('it should increase water by 5', () => {
    let plant = {};
    expect(superWater(plant)).toEqual({ water: 5 });
  });


// describe('stateControl', () => {

//   test('should change the state when passsing in a changestate function', () => {
//     expect().toEqual();
//   });

//   test('should return current state when no argument is passed in', () => {
//     expect().toEqual();
//   });

});

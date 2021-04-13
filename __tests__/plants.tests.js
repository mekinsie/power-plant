const { stateControl, changeState, feed, blueFood, hydrate, superWater} = require('./../src/plants.js');


describe('changeState', () => {
  test('should increase property value', () => {
    let plant = {};
    expect(changeState("soil")(5)(plant)).toEqual({ soil: 5 });
  });


// describe('stateControl', () => {

//   test('should change the state when passsing in a changestate function', () => {
//     expect().toEqual();
//   });

//   test('should return current state when no argument is passed in', () => {
//     expect().toEqual();
//   });

});

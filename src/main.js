import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, changeState, feed, blueFood, hydrate, superWater, plant1, plant2} from './plants.js';

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

    $('#feed-joe').click(function() {
      const newStateJoe = stateControl(blueFood);
      $('#soil-value-joe').text(`Soil: ${newStateJoe.soil}`);
    });

    $('#feed-carl').click(function() {
      const newStateCarl = plant1(blueFood);
      $('#soil-value-carl').text(`Soil: ${newStateCarl.soil}`);
    });

    $('#feed-shannon').click(function() {
      const newStateShannon = plant2(blueFood);
      $('#soil-value-shannon').text(`Soil: ${newStateShannon.soil}`);
    });
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    // $('#show-state-joe').click(function() {
    //   // We just need to call stateControl() without arguments to see our current state.
    //   const currentState = stateControl();
    //   $('#soil-value-joe').text(`Soil: ${currentState.soil}`);
    // });
  });
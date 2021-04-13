import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, changeState, feed, blueFood, hydrate, superWater, plant1, plant2, artificialLight, sunlight, massage, playMusic} from './plants.js';

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

    $('#feed-joe').click(function() {
      const newStateJoe = stateControl(feed);
      $('#soil-value-joe').text(`Soil: ${newStateJoe.soil}`);
    });
    $('#wine-joe').click(function() {
      const newStateJoe = stateControl(blueFood);
      $('#soil-value-joe').text(`Soil: ${newStateJoe.soil}`);
    });

    $('#water-joe').click(function() {
      const newStateJoe = stateControl(hydrate);
      $('#water-value-joe').text(`Water: ${newStateJoe.water}`);
    });

    $('#shower-joe').click(function() {
      const newStateJoe = stateControl(superWater);
      $('#water-value-joe').text(`Water: ${newStateJoe.water}`);
    });

    $('#grow-light-joe').click(function() {
      const newStateJoe = stateControl(artificialLight);
      $('#light-value-joe').text(`Light: ${newStateJoe.light}`);
    });

    $('#sunlight-joe').click(function() {
      const newStateJoe = stateControl(sunlight);
      $('#light-value-joe').text(`Light: ${newStateJoe.light}`);
    });

    $('#massage-joe').click(function() {
      const newStateJoe = stateControl(massage);
      $('#health-value-joe').text(`Health: ${newStateJoe.health}`);
    });

    $('#serenade-joe').click(function() {
      const newStateJoe = stateControl(playMusic);
      $('#health-value-joe').text(`Health: ${newStateJoe.health}`);
    });

    $('#feed-carl').click(function() {
      const newStateCarl = plant1(feed);
      $('#soil-value-carl').text(`Soil: ${newStateCarl.soil}`);
    });
    $('#wine-carl').click(function() {
      const newStateCarl = plant1(blueFood);
      $('#soil-value-carl').text(`Soil: ${newStateCarl.soil}`);
    });

    $('#water-carl').click(function() {
      const newStateCarl = plant1(hydrate);
      $('#water-value-carl').text(`Water: ${newStateCarl.water}`);
    });

    $('#shower-carl').click(function() {
      const newStateCarl = plant1(superWater);
      $('#water-value-carl').text(`Water: ${newStateCarl.water}`);
    });

    $('#grow-light-carl').click(function() {
      const newStateCarl = plant1(artificialLight);
      $('#light-value-carl').text(`Light: ${newStateCarl.light}`);
    });

    $('#sunlight-carl').click(function() {
      const newStateCarl = plant1(sunlight);
      $('#light-value-carl').text(`Light: ${newStateCarl.light}`);
    });

    $('#massage-carl').click(function() {
      const newStateCarl = plant1(massage);
      $('#health-value-carl').text(`Health: ${newStateCarl.health}`);
    });

    $('#serenade-carl').click(function() {
      const newStateCarl = plant1(playMusic);
      $('#health-value-carl').text(`Health: ${newStateCarl.health}`);
    });

    $('#feed-shannon').click(function() {
      const newStateShannon = plant2(feed);
      $('#soil-value-shannon').text(`Soil: ${newStateShannon.soil}`);
    });
    $('#wine-shannon').click(function() {
      const newStateShannon = plant2(blueFood);
      $('#soil-value-shannon').text(`Soil: ${newStateShannon.soil}`);
    });
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    // $('#show-state-carl').click(function() {
    //   // We just need to call plant1() without arguments to see our current state.
    //   const currentState = stateControl();
    //   $('#soil-value-joe').text(`Soil: ${currentState.soil}`);
    // });
  });
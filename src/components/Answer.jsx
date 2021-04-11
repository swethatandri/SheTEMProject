import React from 'react'
import {useState}  from 'react';
import Button from './Button'
import Questions from './Questions'


 var score = 0;


const Answer = ({value, addQuestion}) => {

  function updateState(number){

    score = number;
    console.log(score);

  }

  function getScore(){

    return score;
  }
    return (

      <div>
        <form>
        
        <div class="radio-toolbar">
  <input type="radio" id="radio1" onClick={() => updateState(1)} name="radios" value="one" />
  <label for="radio1">1</label>

  <input type="radio" onClick={() => updateState(2)}id="radio2" name="radios" value="two"/>
  <label for="radio2">2</label>

  <input type="radio" id="radio3" onClick={() => updateState(3)}name="radios" value="three"/>
  <label for="radio3">3</label>

<input type="radio" onClick={() => updateState(4)}id="radio4" name="radios" value="four"/>
  <label for="radio4">4</label>
        </div>



   
        

  
        </form>

        <Button text = "Next Question" onClick={() => addQuestion(score)} />

      </div>
    )

   
    }




  










export default Answer
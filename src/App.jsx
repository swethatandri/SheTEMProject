import React from 'react';
import './App.css';
import Question from "./components/Question"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from './components/Button'
import Homepage from './components/Homepage'
import Answer from './components/Answer'
import Result from './components/Result'
import {useState}  from 'react';

var index = -1;
var mathq = 0;
var science = 0;
var tech = 0;
var engineering = 0;
var math = 0;
var roundquestion = '';
var result = '';

var questionList = [{category: 'Science',  text: 'On a scale from 1 to 4, how curious are you about the world around you?'}, { category: 'Tech', text: 'How much do you enjoy problem-solving and activities like puzzles?'}, { category: 'Engineering', text: 'How much did you (or do you still) enjoy building with Legos as a child?'}, { category: 'Math', text: 'How much do you like to find patterns in the world around you?'}, { category: 'Science', text: 'How much were you fascinated by the topics that Bill Nye the Science Guy covered in his movies when you were a kid?'}, { category: 'Tech', text: 'How much do you enjoy creating things and watching what you make come to life?'}, {category: 'Engineering', text: 'How creative are you?'}, {category: 'Math', text: 'To what extent do you prefer theoretical and conceptual based thought to hands-on learning?'}, {category: 'Science', text: 'To what extent do you prefer observation to creation?'}, {category: 'Tech', text: 'How flexible are you when plans go away?'}, {category: 'Engineering', text: 'How detail oriented are you?'}, {category: 'Math', text: 'To what extent do you prefer clear cut answers to ambiguity?'}, {category: 'Science', text: 'How open-minded and objective are you?'}, {category: 'Tech', text: 'How logic based is your style of thinking?'}, {category: 'Engineering', text: 'When taking a test, on the scale where turning in your test without checking it is 1 and checking over your answers multiple times, but still feeling nervous about it is 4, where do you fall?'}, {category: 'Math', text: 'How good is your memory?'}];

function App() {

  const [questions, countQuestions] = useState(
    [
          
    ]

  )

  const [finalVerdict, verdictAdd] = useState(

    []
  )

  var qscore = 0;
  const addQuestion = (score) =>
 {
   console.log("My score is: " + score);
   

   if(index < questionList.length - 1){

   if(index == 0 || index == 4 || index== 8 || index == 12){
     //console(questionList[index]);
     science += score;
   }

   if(index == 1 || index == 5 || index == 9 || index == 13 == 'Tech'){

     tech += score;
   }

   if(index == 2 || index == 6 || index == 10 || index == 14 == 'Engineering'){

     engineering += score;
   }
   
   if(index == 3 || index == 7 || index == 11 || index == 15 == 'Engineering'){

     math += score;
   }

   console.log("My science score is now " + science)
   
   increment(); 

   countQuestions([questionList[index]]);
   }

   else if(index == questionList.length - 1){
     determineResult();
     countQuestions([{category: 'na', text: 'Your result is ' + result + "! Feel free to view the career tab on our site for career options that line up with the " + result + " part of the acronym! Your science score was " + science + " , your technology score was " + tech + ", your engineering score was " + engineering + " , and your math score was " + math + "!"}])
   }

   

    function determineResult(){

     if (science > tech && science > engineering && science > math){

       result = "science";
     }

     else if (tech > engineering && tech > math)
     {
       result = "technology";
       
     }
     else if (engineering > math)
     {
      result = "engineering";
     }
     else
     {
       result = "math";
     }
     
   }

 }
 

 function increment(){

   if(index < questionList.length){

   index++;

   }
 }

 function questionType(q)
 {
   var type = 0;
   if (q !== undefined) {
     var type = q.category;
     //retrieve type/category of question being displayed
   } 
   else {
    console.log('q is undefined or null');
   }
   return type;  
 }
 
  return (
    <div>
    <Header />
    <Button text = "Begin Activity" onClick = {addQuestion} />
    {questions.map((question) => (<Question question = {question.text} addQuestion = {addQuestion} 
    res = {result} /> ) )}
    
    <Footer />
    </div>
    
  );
}




export default App;
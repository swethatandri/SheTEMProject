import React from 'react'
import Button from './Button'
import Answer from './Answer'
import engineeringPic from './Engineering.png';
import mathPic from './Math.png';
import sciencePic from './Science.png';
import technologyPic from './Technology.png';


const Question = ({question, addQuestion, res}) => {

  if(res.length > 0 && res == "math" ){

    return(

       <div class = "questionStyle">

        <h3> {question} </h3>
        
        <img className="math" src={mathPic} />

        </div>



    )



          
   }

   if(res.length > 0 && res == "science" ){

    return(

       <div class = "questionStyle">

        <h3> {question} </h3>
        
        <img className="math" src={sciencePic} />

        </div>



    )



          
   }

   if(res.length > 0 && res == "engineering" ){

    return(

       <div class = "questionStyle">

        <h3> {question} </h3>
        
        <img className="math" src={engineeringPic} />

        </div>



    )

    if(res.length > 0 && res == "technology" ){

    return(

       <div class = "questionStyle">

        <h3> {question} </h3>
        
        <img className="math" src={technologyPic} />

        </div>



    )



          
   }



          
   }



    return (
        <div class = "questionStyle">

        <h3> {question} </h3>

        <div class = "yesno">

        

        <Answer value = {"value"} addQuestion = {addQuestion} />
  

        </div>

       </div>


        
           

        
    )
}







export default Question

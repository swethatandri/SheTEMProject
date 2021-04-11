import React from 'react'

const Button = ({text, onClick}) => {
    return (
        <div>

          <div class="buttons">
            <button className = "button" onClick = {onClick}> {text} </button>  
          </div>

            
        </div>
    )

   
}



export default Button
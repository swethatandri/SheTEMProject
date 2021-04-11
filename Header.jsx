import React from 'react'
import logo from './Logo.png';
import engineeringPic from './Engineering.png';
import mathPic from './Math.png';
import sciencePic from './Science.png';
import technologyPic from './Technology.png';


const Header = () => {
    return (
        <div class = "header">
          <nav>
            <a class="navi" href="https://ModestDizzyLifecycles.swethatandri.repl.co">HOME</a>
            <a class="navi" href="https://aboutpage.sneyeah.repl.co/index.html">ABOUT</a>
            <a class="navi" href="https://aboutpage.sneyeah.repl.co/careerpaths.html">CAREER PATHS</a>
            <a class = "navi" href = "https://aboutpage.sneyeah.repl.co/imposter.html">  IMPOSTER SYNDROME RESOURCES </a>
          </nav>
          <section class="images">
            <img className="science" src={sciencePic} />
            <img className="technology" src={technologyPic} />
            <img className="engineering" src={engineeringPic} />
            <img className="math" src={mathPic} />
          </section>

          <img className = "logo" src={logo} alt="SheTEM logo. The 'She' is written in dark blue cursive and the 'TEM' is in all caps and italicized with the color being pacific blue." />

          {/*add a navigation bar here for the 2 other pages */}
           

            
        </div>
    )
}



export default Header
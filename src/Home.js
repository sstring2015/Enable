import React from 'react'
import Module from "./Module";
import "./Home.css"
import ImageIcon from '@material-ui/icons/Image';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MicIcon from '@material-ui/icons/Mic';
import {Link} from "react-router-dom";
import signLang from './images/signlang.jpg'
import deaf from './images/deaf.jpg'
import blind from './images/blind.jpg'


function Home() {
    return (
        <div className="home">
            
            <div className="home__row">
            <img src={signLang} width="350" height='350' alt="sign language" />
            <img src={blind} width="350" height='350' alt="text to speech" />
            <img src={deaf} width="350" height='350' alt="speech to text" />

            <Link to="/sign">
            <Module
                id="1A"
                title="Sign-Detection"
                Icon={VisibilityIcon} />
            </Link>
           
                <Link to="/caption">
                <Module
                id="1B"
                title="Caption-Detection"
                Icon={ImageIcon}
                    />
                
                </Link>
                
               
                <Link to="/speech">

                    
                <Module
                id="1C"
                title="Speech-to-text"
                Icon={MicIcon}
                />
                    
                </Link>
              
               



            </div>



        </div>
    )
}

export default Home

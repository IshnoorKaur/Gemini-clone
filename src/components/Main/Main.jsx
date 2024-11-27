import React from 'react' // Importing React library for component creation
import './Main.css' // Importing the CSS file for styling the component
import { assets } from '../../assets/assets' // Importing assets (images/icons)

// Main functional component
const Main = () => {
  return (
    <div className='main'> {/* Main wrapper div */}
      <div className="nav"> {/* Navigation bar */}
        <p>Gemini</p> {/* Logo or app name */}
        <img src={assets.user_icon} alt="" /> {/* User icon */}
      </div>
      
      <div className="main-container"> {/* Main content container */}
        <div className="greet"> {/* Greeting section */}
            <p><span>Hello, Sam.</span></p> {/* Personalized greeting */}
            <p>How can I help you today?</p> {/* Instructional text */}
        </div>

        <div className="cards"> {/* Card section for different options */}
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" /> {/* Compass icon */}
            </div>

            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" /> {/* Bulb icon */}
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" /> {/* Message icon */}
            </div>

            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" /> {/* Code icon */}
            </div>

        </div>

        <div className="main-bottom"> {/* Bottom section with search and info */}
            <div className="search-box"> {/* Search input box */}
                <input type="text" placeholder='Enter a prompt here' /> {/* Placeholder text */}
                <div> {/* Icons inside the search box */}
                    <img src={assets.gallery_icon} alt="" /> {/* Gallery icon */}
                    <img src={assets.mic_icon} alt="" /> {/* Mic icon */}
                    <img src={assets.send_icon} alt="" /> {/* Send icon */}
                </div>
            </div>

            <p className="bottom-info"> {/* Privacy information */}
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main // Exporting the component for use in other parts of the app

// Import necessary modules and assets
import React, { useState } from 'react'  // Importing React and useState hook
import './Sidebar.css'                  // Importing the CSS file for styling
import { assets } from '../../assets/assets'  // Importing assets (icons) from the assets folder

// Sidebar functional component
const Sidebar = () => {

    // State to control whether the sidebar is extended (expanded) or not
    const [extended, setExtended] = useState(false)

    return (
        // Main sidebar container
        <div className='sidebar'>
            <div className="top">  {/* Top section of the sidebar */}
                {/* Menu icon to toggle sidebar expansion */}
                <img 
                    onClick={() => setExtended(prev => !prev)}  // Toggle the extended state on click
                    className='menu' 
                    src={assets.menu_icon} 
                    alt="Menu Icon" 
                />

                {/* New Chat section */}
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    {/* Show 'New Chat' text only if sidebar is extended */}
                    {extended ? <p>New Chat</p> : null}
                </div>

                {/* Recent chats section - only visible when sidebar is extended */}
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="Message Icon" />
                            <p>What is react ...</p> {/* Placeholder for a recent chat entry */}
                        </div>
                    </div>
                : null}
            </div>

            {/* Bottom section of the sidebar */}
            <div className="bottom">
                {/* Help section - visible only when sidebar is extended */}
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help Icon" />
                    {extended ? <p>Help</p> : null}
                </div>

                {/* Activity section - visible only when sidebar is extended */}
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity Icon" />
                    {extended ? <p>Activity</p> : null}
                </div>

                {/* Settings section - visible only when sidebar is extended */}
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings Icon" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

// Export the Sidebar component so it can be used in other files
export default Sidebar

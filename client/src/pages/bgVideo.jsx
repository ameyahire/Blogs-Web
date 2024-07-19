import React from "react";
import video from '../assets/demo.mp4';
 
function bgVideo(){
    return (
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted/>
            </div>
        </div>
    )
}
export default bgVideo
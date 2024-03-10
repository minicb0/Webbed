import React from 'react';
import './main.css';

const mainSection: React.FC = () => {
    const scroll = () => {
        const element = document.getElementById("animals");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div id="home" className='main-container'>
            {/* <img src="/images/bg.png" /> */}
            {/* <video src="/videos/video1.mp4" autoPlay loop muted /> */}
            <h1>Virtual Zoo</h1>
            <p>In the incredible planetary space</p>

            <div
                className='scroll' onClick={scroll}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default mainSection;

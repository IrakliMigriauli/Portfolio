import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/HeartEmoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'

import { themeContext } from "../../Context";
import { useContext } from 'react';

import { motion } from 'framer-motion';


const Services = () => {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

     return (
        <div className="services" id='Services' >


            {/*  Left side  */}
            <div className="awesome">
                <span style={{color: darkMode? 'whitesmoke' : ''}}>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ispum is simpley dummy text of printing of printing Lorems
                    <br />
                    ispum is simple dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94"}} ></div>
            </div>

            {/* Right side */}
            <div className="cards">

                            {/* 1st CARD */}
                <motion.div 

                initial={{left: '25rem'}}
                whileInView={{left: '18rem'}}
                transition={{transition}}

                style={{left: '14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>

                            {/* 2nd CARD */}

                <motion.div 
                
                initial={{left: '-25rem'}}
                whileInView={{left: '-8px'}}
                transition={{transition}}
                
                style={{top: "12rem", left: "-4rem"}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"Html, Css, JavaScript, React, Python, Swift, C, C++, C#, R"}
                    />
                </motion.div>

                            {/* 3rd CARD */}
                
                <motion.div 
                
                initial={{left: '25rem'}}
                whileInView={{left: '17rem'}}
                transition={{transition}}
                
                style={{top: "19rem", left: "12rem"}}>
                    <Card
                        emoji = {Humble}
                        heading = {"UI/UX"}
                        detail = {"Lorem ispum dummy text are usually use in section"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple"}}></div>
            </div>
        </div>
    )
}

export default Services
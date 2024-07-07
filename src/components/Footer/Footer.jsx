import React from 'react'
import './Footer.css';
import facebook from '../../assets/facebook.png'
import linked from '../../assets/linkedi.png'
import git from '../../assets/github.png';
import email from '../../assets/email.png';
import word from '../../assets/word.png';




const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-left">
            <h1>Get In Touch</h1>
            <p>Ecosystem bootstrapping Learning curve lean startup disruptive Marketing long tail disruptive agile development partner</p>

        <div className='footer-icon'>
            <img src={facebook} alt="" />
            <img src={linked} alt="" />
            <img src={git} alt="" />
            <img src={git} alt="" />
        </div>
        </div>
       
            <div className="footer-right ">
                <img src={email} alt="" />
                <p>shivamchauhan2499@gmail.com</p>
            </div>
            <div className="footer-right ">
                <img src={word} alt="" />
                <a href='http://shivamchauhanportfolio.netlify.app' target='_blank'><button>Second Portfolio</button></a>
            </div>
        
    </div>
  )
}

export default Footer
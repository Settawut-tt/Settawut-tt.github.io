import React from 'react'
import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from  "../../img/address.png"
import Github from  "../../img/github.png"
import Linkin from  "../../img/linkin.png"
import {useRef,useContext,useState} from 'react';
import{ init } from '@emailjs/browser';
import { ThemeContext } from '../../context';



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        init
          .sendForm(
            "service_yiwij9s",
            "template_3stlokh",
            formRef.current,
            "ocZjJRDYGK1VRtGbu"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    
    
  return (
    <div className='c'>
        <div className="c-bg">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            082-237-8842
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            settawut.th@ku.th
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            123/262 Saimai Bangkok 10220
                        </div>
                        <div className="c-info-item">
                            <img src={Github} alt="" className="c-icon" />
                           <a href=" https://settawut-tt.github.io/">settawut-tt.github.io</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Linkin} alt="" className="c-icon" />
                            Settawut Thaingthat
                        </div>
                    </div>
                </div>
                <div className="c-right">
                <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#222"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#222"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you.."}
            </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
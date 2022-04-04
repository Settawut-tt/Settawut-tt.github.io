import React from 'react'
import "./about.css"
import Me from "../../img/me.jpg"
import Award from "../../img/world.jfif"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">Experience</h1>
            <p className="a-sub">
                sfkknkk kdfklsfj;lsjp sldv
            </p>
            <p className="a-desc">
                Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Veritat
                dasf dsgsdgs asfasfentky
            </p>
            <div className="a-award">
                <img src={Award} alt="" className='a-award img' />
                <div className="a-award-texts">
                <h4 className="a-award title">PI R Engineering</h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing eli Quidem hic fuga 
                    placeat, totam officiisl omnis blanditiis, quo accusantium iusto nam velit 
                    ut fugiat reprehenderit facere sint!
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import './style.css';
import profPic from './img/work.profile_pic.jpeg';
import { Link } from 'react-router-dom';
import facebook from './img/facebook.svg';
import github from './img/github.svg';
import linkedin from './img/Linkedin.svg';
import instagram from './img/instagram.svg';
import './glowButton.css';



class ContactInfo extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className="col-md-12">
                    <img src={profPic} alt={"portPhoto"} className="portImage" />
                </div>
                <div className="contactInformation col-12 align-content-center">
                    <h5 className="contactInfo container-fluid">How to contact me</h5>
                    <p className="email container-fluid" id="font3"> Email: cody.r.michaud@gmail.com</p>
                    <p className="upWork container-fluid" id="font3">Reach me on <Link to="https://www.upwork.com/freelancers/~014a06d8859dfbd50e" className="upWorkLink">Upwork</Link>.</p>

                    <p className="phoneNumb container-fluid">Work: 425-281-4403</p>
                    <p className="container-fluid text-center githubName" id="font3">Head to
            my <Link to="https://github.com/codymichaud" rel='noreferrer' target="_blank" className="githubHref">Github page</Link> to see all my

            repos and projects.</p>
                    <br />
                    <h4 className="resHead container-fluid mx-auto text-center"><a href="./assets/Cody Resume (3).pdf" target="_blank" className="resPdf resGradient">Resume</a>
                    </h4></div>
                <br />
                <div className="glowBtns">
                    <ul>
                        <li><a href="www.facebook.com" rel='noreferrer' target="_blank"><img src={facebook} className="fab fa-facebook" alt='Facebook' /></a></li>
                        <li><a href="https://github.com/codymichaud" rel='noreferrer' target="_blank"><img src={github} className="fab fa-github" alt='Github' /></a></li>
                        <li><a href="https://www.linkedin.com/in/cody-michaud/" rel='noreferrer' target="_blank"><img src={linkedin} alt='LinkedIn' className='fab fa-github' /></a></li>
                        <li><a href="www.instagram.com" rel='noreferrer' target="_blank"><img src={instagram} className="fab fa-instagram" alt='Instagram' /></a></li>

                    </ul>
                </div>
            </div >
        );
    }
}

export default ContactInfo;
import React from 'react';
import './style.css';
import lyricity from './img/Lyricity.PNG';
import socks from './img/socksApp.PNG';
import leesRept from './img/lees-reptile.PNG';
import latteDaa from './img/latte.Daa.PNG';
import budgetTracker from './img/budgetTracker.PNG';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="portProjects col-lg-12">
                    <div className="lyricityCont col-12">
                        <div className="clearProj">
                            <img src={lyricity} alt="lyricity" className="lyricityImg container-fluid" />
                            <h2 className="lyricityTitle font2 container-fluid">Lyricity</h2>
                            <p className="lyricityPar">This is Lyricity. My team and I created a web lyrics app that allows
                                a user to
                                search for a song that they want to know the lyrics to. If the song is in our database it will
                                generate
                                the lyrics and album cover if available. The user can then favorite that song to save it to their
                                favorites. On the left hand side of the page the user will find a favorites button. When they click
                                on this it will open their favorites tab allowing them to view and revisit their favorited songs or
                                clear their favorites in case they are wanting a new list. If the song is not in our database the
                                user
                                will be greeted with an inspiring Kanye
                                quote and Kanye picture. Future developments include the ability to play music, styled lyrics,
                                ability to create and save music to a playlist.
                            </p>
                            <h5 className="lyrLink">Check out the website <a href="https://codymichaud.github.io/Lyricity/" className="gitLink" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                            <p className="langUsedLyr">Tools used for this project include: HTML5, Vanilla CSS, Bootstrap, jQuery,
                                APIs.
                            </p>
                            <h5 className="lyrRepo">If you want to look at the code and see how it was done head <a href="https://github.com/codymichaud/team9" className="repoLink" rel='noreferrer' target="_blank">here</a>!!</h5>
                        </div>
                    </div>
                    <div className="codeQCont col-12">
                        <div className="clear">
                            <img src={socks} alt={"Socks Stock App"} className="codeQImg container-fluid" />
                            <h2 className="codeQTitle font2 container-fluid">Coding Quiz</h2>
                            <p className="codeQPar">This is Coding Quiz. I created this web app for my Coding Bootcamp homework. This
                                web app allows the user to start a timed and scored coding quiz. The quiz has a series of 5 multiple
                                choice questions. The user has 100 seconds to complete these 5 coding questions. As they answer the
                                questions if they get the answer wrong it will display the correct answer below the next question.
                                Once the user reaches the end of the quiz they will see their final score which is based off the
                                time remaining. They are then asked to enter their initials to save their score in the high score
                                page. It will also display how many they got correct. Once they submit their score they will be
                                directed to the high score page which will display all logged scores. Future developments include
                                the web app having quizs for multiple languages as well as lessons on languages that users can use
                                to learn how to code and create web apps. Also will save users progress, allow them to have profiles
                                where they save their languages they are learning, projects they have made and a play ground for
                                users to practice.
                            </p>
                            <h5 className="codeLink">Check out the website <a href="https://codymichaud.github.io/coding.quiz/index.html" className="codeLink2" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                            <p className="langUsedCode">Tools used for this project include: HTML5, CSS3, and JavaScript.
                            </p>
                            <h5 className="codeRepo">If you want to look at the code and see how it was done head <a href="https://github.com/codymichaud/coding.quiz" className="repoLink2" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                        </div>
                    </div>
                    <div className="latteDCont col-12">
                        <div className="clearLatte">
                            <img src={latteDaa} alt={"Latte Daa"} className="latteDImg container-fluid" />
                            <h2 className="latteDTitle font2 container-fluid">Latte' Daa</h2>
                            <p className="latteDPar">This is Latte' Daa. I created this website for a local coffee stand in my area. On
                                their site a user will be able to see their home page which includes a navbar with the web links,
                                name and their social profiles linked to the icons. The about me page is currently under
                                development. The user will be able to see who owns the coffee stand and a little bit about them. On
                                the menu page users can see the entire menu for Latte' Daa. They will also be able to order off of
                                doordash by clicking on the door dash link or scanning the QR code. Future developments include
                                being able to order directly off the website. Allowing users to pay for goods off Latte' Daa
                                website. Pictures of menu items. On the contact us page user are able to enter their name, email
                                address and a reason for contact in a contact form. Future developments include these contact
                                submissions being sent to an email for the owner to read and respond to. An error message if the
                                user has not entered a reason for contact. A submission form for reviews to be stored on the website
                                in order for others to view at any computer. This website is still under development.
                            </p>
                            <h5 className="latteLink">Check out the website <a href="https://codymichaud.github.io/Latte_Daa" className="codeLink3" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                            <p className="langUsedLatte">Tools used for this project include: HTML5, CSS3, Bootstrap and JavaScript.
                            </p>
                            <h5 className="latteRepo">If you want to look at the code and see how its been created and future
                                developments head <a href="https://github.com/codymichaud/Latte_Daa" className="repoLink3" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                        </div>
                    </div>
                    <div className="noteTakerCont col-12">
                        <div className="clearNote">
                            <img src={budgetTracker} alt={"Progressive Budget Tracker"} className="noteTakerImg container-fluid" />
                            <h2 className="noteTakerTitle font2 container-fluid">Note Taker</h2>
                            <p className="noteTakerPar">This is Note Taker. This web app allows a small business owner to create, save,
                                view, and delete notes. The user will be directed to the homepage where they will need to click 'Get
                                Started'. The user will then be able to start typing their new note right away. Once they enter a
                                note title and put text in the note body, the user will then be able to save their note for future
                                access or deletion.
                            </p>
                            <h5 className="noteLink">Check out the website <a href="https://glacial-meadow-69122.herokuapp.com/" className="codeLink4" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                            <p className="langUsedNote">Tools used for this project include: HTML5, CSS3, Node.Js, Express.Js, MySQL.
                            </p>
                            <h5 className="noteRepo">If you want to look at the code, see how its been created and future
                                developments head <a href="https://github.com/codymichaud/Note.Taker" className="repoLink4" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                        </div>
                    </div>
                    <div className="leesReptCont col-12">
                        <div className="clearRept">
                            <img src={leesRept} alt={"Lee's Reptile Emporium"} className="leesReptImg container-fluid" />
                            <h2 className="leesReptTitle font2 container-fluid">Lee's Reptile Emporium</h2>
                            <p className="leesReptPar">This is Lee's Reptile Emporium. Lee's Reptile Emporium is your one stop online
                                shop for new pets ranging from a 14 foot python to a 1 inch dart frog and
                                everything in between. This web-based app will allow the user to view their future scaly family
                                member, add animals to their cart and learn more about all of the amazing ways to incorporate them
                                into your life.</p>
                            <h5 className="reptLink">Check out the website <a href="https://lees-reptile-emporium.herokuapp.com/" className="codeLink5" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                            <p className="langUsedRept">Tools used for this project include: HTML5, CSS3, Node.Js, Express.Js,
                                JawsDB, HandleBars, Sequelize, DotEnv, Bcrypt.Js, MVC.
                            </p>
                            <h5 className="reptRepo">If you want to look at the code, see how its been created and future
                                developments head <a href="https://github.com/codymichaud/Lees-Reptile-Emporium" className="repoLink5" rel='noreferrer' target="_blank">here</a>!!
                            </h5>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Projects;
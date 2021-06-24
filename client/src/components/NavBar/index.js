import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <p className="nameP">Cody Michaud</p>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <Link to='/'>
                                <p id="font2" class="nav-link">Home</p>
                            </Link>



                            <Link to='/projects'>
                                <p id="font2" class="nav-link">Projects</p>
                            </Link>


                            <Link to='/contact'>
                                <p id="font2" class="nav-link">Contact Me!</p>
                            </Link>

                        </ul>
                    </div>


                </nav>
            </div>
        )
    }
}

export default NavBar;

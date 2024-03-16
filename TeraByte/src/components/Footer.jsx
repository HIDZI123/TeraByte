import React from 'react'
import '../styles/footer.css'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import LinkedIn from '../assets/linkedin.png'
import inst from '../assets/instagram.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>Meet the Team</h4>
                    <a href="/">
                        <p>Mustafa Sarangpurwala</p>
                    </a>
                    <a href="/">
                        <p>Aarya Thakur</p>
                    </a>
                    <a href="/">
                        <p>Kishan Wali</p>
                    </a>
                    <a href="/">
                        <p> Varun Putta</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>TechStack</h4>
                    <a href="/">
                        <p>React.js</p>
                    </a>
                    <a href="/">
                        <p>Mongodb</p>
                    </a>
                    <a href="/">
                        <p>Tailwind CSS</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Explore</h4>
                    <a href="/employer">
                        <p>TeraByte</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Company</h4>
                    <a href="/">
                        <p>About</p>
                    </a>
                    <a href="/">
                        <p>Source Code</p>
                    </a>
                    <a href="/">
                        <p>Story</p>
                    </a>
                    <a href="/">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=''/></p>
                        <p><img src={twitter} alt=''/></p>
                        <p><img src={LinkedIn} alt=''/></p>
                        <p><img src={inst} alt=''/></p>
                    </div>
                </div>
            </div>
            <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} TeraByte All right reserved</p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/term">
                            <div>
                                <p>Term & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>Privacy</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Security</p>
                            </div>
                        </a>
                        <a href="/cookie">
                            <div>
                                <p>Cookie Declaration</p>
                            </div>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
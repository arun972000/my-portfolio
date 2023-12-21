/* eslint-disable react/no-unescaped-entities */
// HeaderComponent.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';
import vid from "../assets/pexels_videos_2611250 (2160p).mp4"

const Header = () => {
    return (
        <header className="header-container mb-5">
           
           <video autoPlay muted loop className="header-background">
            <source
                src={vid}
                type="video/mp4"
            />
            </video>
            <div className="overlay-text">
                <h1 className="text-center"><b>I'm <span style={{color:"#FF00FF"}}>Arun Pandian</span></b></h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Full Stack Developer',
                        1000,
                        'UI/UX Designer',
                        1000,
                        'Graphic Designer',
                        1000

                    ]}
                    speed={40}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
        </header>
    );
};

export default Header;

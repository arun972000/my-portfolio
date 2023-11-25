/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import './about.css';
const AboutMe = () => {

    return (

        <div className="about-me-container">
            <div className="container">
            <h3 className="pt-4"style={{ color: "white" }}>ABOUT ME /{`>`}</h3>
            <hr className="title-hr" />
                <div className="javascript-code">
                    <div className="class-declaration common-hover-class">class <span className="myname">Arun</span> <span className="sym common-hover-class">{'{'}</span></div>
                    <div className="command-line">
                        <div >// I can, because I did.</div>
                        <div>// where every challenge becomes an opportunity to sharpen my skills.</div>
                    </div>
                    <div className="constructor ">
                        <div className="method common-hover-class">constructor</div><span className="sym common-hover-class">() {'{'}</span></div>

                    <div className="property common-hover-class">
                        <span className="prop-name">this.name</span> = <span className="string">'M Arun Pandian'</span>;</div>
                    <div className="property common-hover-class">
                        <span className="prop-name">this.dayOfBirth</span> = <span className="number">'09-07-2000'</span>;</div>
                    <div className="property common-hover-class">
                        <span className="prop-name common-hover-class">this.email</span> = <span className="string">'arunpandian972000@gmail.com'</span>;</div>
                    <div className="method-end common-hover-class">{'}'}</div>
                    <div className="constructor">
                        <div className="method common-hover-class">workExperience</div><span className="sym common-hover-class">() {'{'}</span></div>
                    <div className="property common-hover-class">
                        <span className="prop-name">return  {"["}</span> </div>
                    <div className="work-experience">
                        <div className="work-experience-item common-hover-class">
                            <span className="work-experience-key">'2022-now':</span>
                            <span className="work-experience-value">'E-Learning Developer at Edufic Digital'</span>
                        </div>
                        <div className="work-experience-item common-hover-class">
                            <span className="work-experience-key">'2021(2Months)':</span>
                            <span className="work-experience-value">'Video Editor(Intern) at TFS'</span>
                        </div>
                        <div className="work-experience-item common-hover-class">
                            <span className="work-experience-key">'2020-2021':</span>
                            <span className="work-experience-value">'Junior E-Learning Developer at Edufic Digital'</span>
                        </div>
                        <div className="property common-hover-class">
                            <span className="prop-name">{"]"}</span> </div>
                        <div className="constructor sym common-hover-class">
                            {'}'}</div>
                    </div>
                    <div className="education">
                        <div className="constructor ">
                            <div className="method common-hover-class">education</div><span className="sym common-hover-class">() {'{'}</span></div>
                        <div className="property common-hover-class">
                            <span className="prop-name">return  {"["}</span> </div>
                        <div className="education-item common-hover-class">
                            <span className="education-key">'2017-2020':</span>
                            <span className="education-value">'KCS Kasi Nadar College of arts and Science - UG\'s Degree, B.com'</span>
                        </div>
                        <div className="education-item common-hover-class">
                            <span className="education-key">'2022-2023':</span>
                            <span className="education-value">'GUVI - MERN Stack Development (FSD)'</span>
                        </div>
                    </div>
                    <div className="property common-hover-class">
                        <span className="prop-name common-hover-class">{"]"}</span> </div>
                    <div className="constructor sym common-hover-class">
                        {'}'}</div>
                    <div className="education">
                        <div className="constructor common-hover-classr">
                            <div className="method common-hover-class">skills</div><span className="sym common-hover-class">() {'{'}</span></div>
                    </div>
                    <div className="property common-hover-class">
                        <span className="prop-name">return  {"["}</span><span className="education-value">'HTML/CSS/JS', 'Node.js', 'React', 'Bootstrap/MaterialUI',
                            'Webpack/Vite', 'npm',
                            'MySQL/MongoDB', 'Express js', 'Photoshop',
                            'Illustrator', 'After Effects', 'Premiere', 'Motion design', 'UX/UI',
                            'AWS'</span>
                        <span className="prop-name">{"]"}</span>
                    </div>

                    <div className="sym common-hover-class">
                        {'}'}</div>
                    <div className="class-declaration sym mb-3 common-hover-class">
                        {'}'}</div>

                </div>

            </div>
        </div >


    );
};

export default AboutMe;

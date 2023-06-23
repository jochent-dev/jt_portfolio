import Typed from 'react-typed'
import './index.css'
import ProgressBar from './progress_bar/ProgressBar'
export default function About() {
    return (
        <>
            <h1><Typed strings={[
                "About"]}
                typeSpeed={100}
                backSpeed={50}
                loop /></h1>
            <div className='abt_main'>
                <div className='abt_left'>
                    <h2>
                        Education
                    </h2>

                    <div className='abt_left2'>
                        <div className='left_content'>
                            <h3>Grand Valley State University</h3>
                            <h3 className='tag'>B.S. Computer Science</h3>
                            <p className='date' >Aug. 2020 - May 2024</p>
                            <p>GPA: 3.843<br/>Relevant Coursework:</p>
                            <ul>
                                <li>CIS 263: Data Structures & Algorithm</li>
                                <li>CIS 350: Intro. to Software Engineering</li>
                                <li>CIS 371: Web Application Development</li>
                                <li>CIS 241: System Level Programming & Utilities</li>
                                <li>CIS 353: Database</li>
                                <li>CIS 457: Data Communications</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='abt_right'>
                    <h2>
                        Experience
                    </h2>
                    <div className='abt_right2'>
                        <div className='right_content'>
                            <h3>Gordon Food Service</h3>
                            <h3 className='tag'>Stores Technology Service Intern</h3>
                            <p className='date'>May 2023 - Ongoing</p>
                            <ul>
                                <li>Provided daily remote technical support to GFS stores in troubleshooting and resolving hardware and software issues. </li>
                                <li>Assisted in performing routing system maintenance tasks, such as updating softwares, and conducting hardware checks to ensure optimal performance of store technologies.</li>
                                <li>Configured networks for stores, including switches and VLANs, as part of the Re-IP project.</li>
                                <li>Developed and deployed front-end codes for Zebra devices. </li>
                            </ul>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='skills_main'>
                <h2>Skills</h2>
                <p>Java</p>
                <ProgressBar  progress='70'></ProgressBar>
                <p>Python</p>
                <ProgressBar  progress='75'></ProgressBar>
                <p>C</p>
                <ProgressBar  progress='55'></ProgressBar>
                <p>SQL</p>
                <ProgressBar  progress='65'></ProgressBar>
                <p>React</p>
                <ProgressBar  progress='70'></ProgressBar>
                <p>HTML</p>
                <ProgressBar  progress='90'></ProgressBar>
                <p>JS</p>
                <ProgressBar  progress='75'></ProgressBar>
                <p>Vue3</p>
                <ProgressBar  progress='70'></ProgressBar>
            </div>

        </>)
}
import Typed from 'react-typed';
import './index.css'
import { faPaperclip, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Projects() {
    return (
        <>
            <h1><Typed strings={[
                "Projects"]}
                typeSpeed={100}
                backSpeed={50}
                loop /></h1>
            <div className='project_main'>
                <div className='project_item'>
                    <h2>Wordle Clone<br />(Vue3)</h2>
                    <p>A clone of the popular game, Wordle, built using Vue3 & Firebase. Users can login and view past games.</p>
                    <div className='project_icons'><a><FontAwesomeIcon icon={faPaperclip} size="2x" /> </a>
                        <FontAwesomeIcon icon={faCode} size="2x" /> </div>
                </div>
                <div className='project_item'>
                    <h2>GVSU Course Database<br />(SQL)</h2>
                    <p>A sample course database for GVSU and various queries built using SQLPlus. </p>
                    <div className='project_icons'><a><FontAwesomeIcon icon={faPaperclip} size="2x" /> </a>
                        <FontAwesomeIcon icon={faCode} size="2x" /> </div>
                </div>
                <div className='project_item'>
                    <h2>College Planner App<br />(Vue3)</h2>
                    <p>A web application that allows user to manage and keep track of their college deadlines as well as upcoming events.</p>
                    <div className='project_icons'><a><FontAwesomeIcon icon={faPaperclip} size="2x" /> </a>
                        <FontAwesomeIcon icon={faCode} size="2x" /> </div>
                </div>
                <div className='project_item'>
                    <h2>Portfolio Site<br />(React)</h2>
                    <p>The current site you are on was built using React to display my skills and experiences.</p>
                    <div className='project_icons'><a><FontAwesomeIcon icon={faPaperclip} size="2x" /> </a>
                        <FontAwesomeIcon icon={faCode} size="2x" /> </div>
                </div>
                <div className='project_item'>
                    <h2>Spell IT<br />(React)</h2>
                    <p>A spelling game that tracks history of the user. The front-end was built using React and back-end was built with MongoDB</p>
                    <div className='project_icons'><a><FontAwesomeIcon icon={faPaperclip} size="2x" /> </a>
                        <FontAwesomeIcon icon={faCode} size="2x" /> </div>
                </div>
            </div>
        </>)
}
import './index.css'
import Typed from 'react-typed'
import headshot from '../../assets/headshot.jpg'


export default function Home() {
    return (

        <>
            <h1 className='title'><Typed strings={[
                "Home"]}
                typeSpeed={100}
                backSpeed={50}
                loop /></h1>
            <div className='main'>
                <div className='left_container'>
                    <img src={headshot} alt='headshot' />
                </div>
                <div className='right_container'>
                    <h2>HELLO WORLD,<br></br>I'm <span id='name'>JOCHEN TAMANG</span></h2>
                </div>

            </div>
        </>

    )
}
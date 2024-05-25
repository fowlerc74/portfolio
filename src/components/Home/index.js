import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        str={'Hi,'}
                        idx={10}
                    />
                    <br /> 
                    <AnimatedLetters 
                        letterClass={letterClass}
                        str={"I'm"}
                        idx={13}
                    />
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        str={'ade Fowler'}
                        idx={16}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        str={'web developer.'}
                        idx={26}
                    />
                    </h1>
                    <h2>Frontend Dev, Javascript Expert, Youtuber</h2>
                    <Link to='/contact'className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type='pacman' />
        </>
    ) 
}

export default Home
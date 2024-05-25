import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.init({
            publicKey: 'TTJ9I4la2gI8J-SbJ',
            blockHeadless: true,
            blockList: {
                list: [''],
                watchVariable: 'userEmail',
            },
            limitRate: {
                id: 'app',
                throttle: 10000,
            },
        })
        emailjs
            .sendForm(
                'service_z2q840n',
                'template_owf933z',
                refForm.current
            )
            .then(
                () => {
                    window.location.reload(false)
                    alert('Message succesfully sent!')
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            str='Contact Me'
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='from_name' 
                                        placeHolder='Name' 
                                        required />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input  
                                        type='text' 
                                        name='subject' 
                                        placeholder='Subject'
                                        required/>
                                </li>
                                <li>
                                    <textarea 
                                        name="message" 
                                        placeholder='Message' 
                                        required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Cade Fowler
                    <br />
                    3038 Creek Ct NE 
                    Roswell, GA 30075
                    <br />
                    <span>cadef461@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup> Sloba lives here, come over for a cup of coffee </Popup>

                        </Marker>

                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact 
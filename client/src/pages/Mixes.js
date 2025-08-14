import '../css/pages-style/Mixes.scss'
import MixHero from '../components/mixes/mix-hero.js'
import SoundCard from '../components/home/sound-card.js'
import axios from 'axios'
import {useEffect, useState} from 'react'


const Mixes = () => {
    const [listOfMixes, setListOfMixes ] = useState([]);

    useEffect(() =>{
        try{
            axios.get("http://localhost:3001/mixes").then((response) => {
            setListOfMixes(response.data);
        });
        } catch (e) {
            console.log(e.message);
        }
    }, [])

    return (
        <div className='mixes-main'>
            <MixHero/>

            <div className='mix-section'>
                <div className='mix-section-header'>
                    <p><span>Indie, pop, alternative</span> From Bacolod Locals to the Streets of LA. My tracks 
                        reaches the deepest underground artists and DJs
                        to rock the night</p>
                </div>

                <div className='mix-grid'>
                    {listOfMixes.map((mix, i) =>(
                        <SoundCard key={i} 
                        title={mix.mixTitle} 
                        address='Aces Bar' 
                        date='June 2, 2022'
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Mixes
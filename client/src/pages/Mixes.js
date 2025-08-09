import '../css/pages-style/Mixes.scss'
import MixHero from '../components/mixes/mix-hero.js'
import SoundCard from '../components/home/sound-card.js'


const Mixes = () => {
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
                    {[...Array(8)].map((_, i) =>(
                        <SoundCard key={i} 
                        title='Crazy Times' 
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
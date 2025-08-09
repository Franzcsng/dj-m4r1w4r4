import '../../css/components-style/mixes/mix-hero.scss'
import SoundCard from '../home/sound-card.js'

const MixHero = () => {
    return(
        <div className='mix-banner-main'>

            <div className='mix-banner-container'>
                <div className='mix-banner-info'>
                    <h1>
                        Check out my Beats
                    </h1>

                    <p>
                        From Bacolod Locals to the Streets of LA. My tracks 
                        reaches the deepest underground artists and DJs
                        to rock the night
                    </p>
                </div>
                <SoundCard
                    head='Latest Mix'
                    title='Fright Night'
                    id='mix-card'
                />
            </div>
            
        </div>
    )
}


export default MixHero;

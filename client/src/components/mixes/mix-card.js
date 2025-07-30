import {Howl, Howler} from 'howler'
import { useState } from 'react'


const MixCard =(prop) =>{
    const [timer, setTimer] = useState('0:00')
    const soundSrc = prop.soundSrc

    const sound = new Howl({
        src: [soundSrc]
    });

    const playSound = () =>{
        sound.play();
    }

    return(
        <div onClick={playSound}>
            
            Play
            
            </div>
    )
}

export default MixCard;
import "../../css/components-style/home/sound-card.scss";
import { Howl } from 'howler';
import { useState, useEffect, useRef } from "react";
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as PauseIcon} from '../../assets/pause.svg';
import { ReactComponent as RewindIcon} from '../../assets/rewind-button.svg';
import soundBg from '../../images/banner/hero_1.jpg';

function SoundCard(prop) {
    const [timer, setTimer] = useState('0:00');
    const [duration, setDuration] = useState('0:00');
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);

    const { 
        soundSrc, 
        title: eventTitle, 
        date: eventDate, 
        address: eventAddress,
        className='', 

    } = prop;

    useEffect(() => {
        const newSound = new Howl({
            src: [soundSrc],
            onload: () => {
                const dur = newSound.duration();
                const minutes = Math.floor(dur / 60);
                const seconds = Math.floor(dur % 60).toString().padStart(2, '0');
                setDuration(`${minutes}:${seconds}`);
            },
            onplay: () => {
                setIsPlaying(true);
                requestAnimationFrame(updateSeek);
            },
            onpause: () => {
                setIsPlaying(false);
            },
            onstop: () => {
                setIsPlaying(false);
                setTimer('0:00');
            },
            onend: () => {
                setIsPlaying(false);
                setTimer('0:00');
            }
        });

        soundRef.current = newSound;

        const handleStop = () => {
            const s = soundRef.current;
            if (s && s.playing()) {
                s.stop();
                setIsPlaying(false);
                setTimer('0:00');
            }
        };

        window.addEventListener("stopAllSounds", handleStop);

        return () => {
            newSound.unload();
            window.removeEventListener("stopAllSounds", handleStop);
        };
    }, [soundSrc]);



    const updateSeek = () => {
        const sound = soundRef.current;
        if (sound && sound.playing()) {
            const seekTime = sound.seek();
            const minutes = Math.floor(seekTime / 60);
            const seconds = Math.floor(seekTime % 60).toString().padStart(2, '0');
            setTimer(`${minutes}:${seconds}`);
            requestAnimationFrame(updateSeek);
        }
    };

    const playSound = () => {
    const s = soundRef.current;
        if (!s) return;

        if (window.currentlyPlayingSound && window.currentlyPlayingSound !== s) {
            window.currentlyPlayingSound.stop();
        }

        if (!s.playing()) {
            s.play();
            window.currentlyPlayingSound = s;
        }
    };

    const pauseSound = () => {
        const s = soundRef.current;
        if (s && s.playing()) {
            s.pause();
        }
    };

    const restartSound = () => {
        const s = soundRef.current;
        if (s) {
            s.seek(0);
            setTimer('0:00');
        }
    };

    return (
        
        <div className={`sound-card-main ${className}`}>
            <img src={soundBg} alt='mix-bg' />

            <div className='sound-overlay'>
                <p>Played at</p>
                <h3>{eventTitle}</h3>
                <p id='mix-details'>{`${eventAddress} | ${eventDate}`}</p>

                <div className='sound-controls-container'>
                    <p className='timer'>{timer}</p>

                        <RewindIcon className='sound-btn rewind' onClick={() => {restartSound()}}/>

                        {isPlaying ? 
                        <PauseIcon className='sound-btn' onClick={() => {
                            isPlaying ? pauseSound() : playSound();
                        }}/>
                        : 
                        <PlayIcon className='sound-btn' onClick={() => {
                            isPlaying ? pauseSound() : playSound();
                        }}/>
                        }

                        <RewindIcon className='sound-btn rewind hide'/>
                  

                    <p className='duration'>{duration}</p>
                </div>
            </div>
        </div>
    );
}

export default SoundCard;

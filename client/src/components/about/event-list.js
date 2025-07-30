import '../../css/pages-style/About.scss';
const eventNames = ["Neon Nights Festival", "Cosmic Voyage", "Tiger’s Clawsseum", "Beyond the Horizon", "Radiowave Rave", "Quantum Leap: Tech Con", "Pulse: The Music Fest", "Ignite Innovation Summit", "Celestial Jam", "Lunar Code Challenge", "Project X: Decode the Future", "Influence II", "Synergy 360", "Maskara Beats", "Datalore: Analytics Day", "Inferno: DJ Clash", "Spectrum: Arts & Culture", "Tigers Unleashed", "Pixel Parade", "Nexus: Hack the Future", "VoltRush", "Gravity: Dance Collision", "CORE: Leaders Assembly", "Orange Cubs: SUPERCHARGE", "Elysium Tech Expo", "Arcadia: Cosplay Carnival", "Brainfuel: Quiz War", "Alpha Mission: Freshie Quest", "Synth City Rumble", "CodeVerse 2025"];

const EventList = () =>{
    return (
        <div className="event-list-container">
        {eventNames.map((name, index) => (
                    <p key={index}> {`• ${name} `} </p>
                ))}
        </div>
    )
}

export default EventList;
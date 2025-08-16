import {useParams} from 'react-router-dom'

const Event = () =>{

    let { id } = useParams();
    return(
        <div>
            {console.log(id)}
        </div>
    )
}

export default Event;
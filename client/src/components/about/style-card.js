import '../../css/components-style/about/style-card.scss';

const StyleCard = (prop) => {
    let style = prop.style;

    return(
    <div className='style-card'>
        <h2>{style}</h2>
    </div>
    )
}

export default StyleCard;
import '../../css/components-style/about/gallery-image.scss'
import img from '../../images/about/about_mrwra.JPG'

const GalleryImage =() =>{
    return(
        <div className='gallery-image'>
            <img id='gallery-img' src={img}/>
            <div className='image-overlay'>
                <h4 className='img-title'> DJ Night </h4>
            </div>
        </div>
    )
}

export default GalleryImage
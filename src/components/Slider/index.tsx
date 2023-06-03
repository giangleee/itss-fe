import './style.scss'
import userImage from '../../assets/user-image.png'
import SliderMenuItem from './SliderMenuItem'
import SliderFooter from './SliderFooter'

const Slider = () => {
    return <div className='slide-container'>
        <div className='user-info__container'>

            <div className='first'>
            <div className='user-info__content'>
                <div className='user-info__image'>
                    <img src={userImage} alt="user image" />
                </div>
                <div className='user-info__info'>
                    <div className='user-info__name'>Nguyen Van A</div>
                    <div className='user-info__role'>Owner</div>
                </div>
            </div>

            <div className='slider-menu'>
                <SliderMenuItem />
                <SliderMenuItem />
                <SliderMenuItem />
                <SliderMenuItem />
                <SliderMenuItem />
            </div>
            </div>

            <div className='footer'>
                <SliderFooter />
            </div>

        </div>
    </div>
}

export default Slider

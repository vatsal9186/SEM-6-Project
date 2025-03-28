import './Banner.css';
import image from './s25.png';
import image1 from './a15.png';
import image2 from './f6.jpg';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <p className="banner-subtitle">EXCLUSIVE Mobiles</p>
                <h1 className="banner-title">Discounts 10% On All Mobile</h1>
                <button className="banner-button">SHOP NOW</button>
            </div>
            <div className="banner-images">
                <img src={image} alt="Mobile 1" className="banner-image" />
                <img src={image1} alt="Mobile 2" className="banner-image" />
                <img src={image2} alt="Mobile 3" className="banner-image" />
            </div>
        </div>
    );
};

export default Banner;

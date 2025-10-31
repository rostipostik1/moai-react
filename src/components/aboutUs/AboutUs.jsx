import { aboutOffice } from '../../assets/images'
import './aboutUs.scss'

const AboutUs = () => {
    return (
        <section className="about-us padding-large">
            <div className="container">
                <div className="about-us_content">
                    <div className="about-us_img">
                        <img src={aboutOffice} alt="about-office"/>
                    </div>
                    <div className="about-us_text">
                        <h3>About Us</h3>
                        <p>Discover a workplace at a Moai that values innovation, encourages your growth and prioritize
                            your well being. Join us be part of a team that values your future and your unique
                            contributions. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
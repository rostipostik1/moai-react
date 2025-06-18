import React, { useState } from 'react'
import { quiseItems, stepContent } from '../../utils/data'
import { quizeImg } from '../../assets/images'


const QuizeSection = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleClick = (id) => {
        setActiveStep(id);
    };
    const current = stepContent[activeStep];
    // console.log(current);

    return (
        <div className='quise'>
            <ul className="quise-list">
                {quiseItems.length && (
                    quiseItems.map(item => (
                        <li 
                            className={`quise-item ${activeStep === item.id ? "active" : ""}`} 
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                        >{item.label}</li>
                    ))
                )}

            </ul>

            <div className="quise-wrapper">
                <figure className="quise-img"><img src={current.image} alt={current.title} /></figure>
                <div className="quise-content">
                    <span className="quise-content-title">{current.title}</span>
                    <span className="quise-content-text">{current.subtitle}</span>
                    <ul className="quise-content-list">
                        <li className="quise-content-item">Target Market and Customer Segmentation</li>
                        <li className="quise-content-item">Competitive Analysis</li>
                        <li className="quise-content-item">Product Roadmap and Development</li>
                        <li className="quise-content-item">Go-to-Market Strategy</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default QuizeSection
import React from 'react'
import './productIdea.scss'
import InnerTop from '../innerTop/InnerTop'
import { productIdeasData } from '../../utils/data'

const ProductIdea = () => {
    return (
        <section className="productIdea padding-large">
            <div className="container">
                <InnerTop subtitle='Product Idea' title='Make it a reality, all you need is Moai' />
                <div className="productIdea-wrapper">
                    {productIdeasData && (
                        productIdeasData.map(item => (

                            <div key={item.id} className={`productIdea-idea ${item.extraClass}`}>
                                <div className="productIdea-content">
                                    <span className="title">{item.title}</span>
                                    <p className="text">{item.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductIdea
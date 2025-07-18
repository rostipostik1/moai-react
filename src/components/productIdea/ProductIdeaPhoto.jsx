import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import { teamMembers } from '../../utils/data'

const ProductIdea = () => {
    return (
        <section className="productIdea padding-large">
            <div className="container">
                <InnerTop subtitle='Meet Our Team' title='Diverse Minds, One shared Mission' />
                <div className="team-wrapper">
                    {teamMembers && (
                        teamMembers.map(item => (
                            <div key={item.id} className="team-idea">
                                <img src={item.image} alt={item.name} />
                                <div className="productIdea-content">
                                    <span className="title-name">{item.name}</span>
                                    <span className="text-job">{item.position}</span>
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
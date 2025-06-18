import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import './style.scss'
import QuizeSection from './QuizeSection'


const Strategize = () => {
    return (
        <section className="strategize">
            <div className="container">
                <InnerTop subtitle='Path to excellence' title='From strategy to execution to support, we have got all your needs covered' />
                <QuizeSection />
            </div>
        </section>
    )
}

export default Strategize
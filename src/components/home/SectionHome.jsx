import React from 'react'

const SectionHome = ({
    subtitle,
    title,
    text,
    buttonText,
    buttonLink,
    image,
    imageAlt,
    sectionClass,
    wrapperClass,
    contentClass,
    imgClass,
    showScrollLink,
}) => {
    return (
        <section className={sectionClass}>
            <div className="container">
                <div className={wrapperClass}>
                    <div className={contentClass}>
                        <span className="home-subtitle">{subtitle}</span>
                        <h1 className="home-title"
                            dangerouslySetInnerHTML={{ __html: title }}
                        >
                        </h1>
                        <p className="home-text">
                            {text}
                        </p>
                        <a href="" className="link--black">{buttonText}</a>
                    </div>
                    <figure className={`home-img ${imgClass}`}><img src={image} alt={imageAlt} /></figure>
                </div>
            </div>
            <a href={buttonLink} className="link-scrolle">{showScrollLink}</a>
        </section>
    )
}

export default SectionHome
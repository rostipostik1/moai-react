import React from 'react'

const FooterBlock = ({ footerData }) => {
    return (
        <>
            {footerData.map((item, index) => (
                <div key={index} className="footer-block">
                    <span className="footer-title">{item.title}</span>
                    {item.links && (
                        <ul className="footer-menu">
                            {item.links.map((link, index) => (
                                <li key={index}><a href="">{link.name}</a></li>
                            ))}

                        </ul>
                    )}
                    {item.social && (
                        <div className="footer-social">
                            {item.social.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a href={item.url} key={idx} aria-label={item.name}>
                                        <Icon className="social-icon" />
                                    </a>
                                );
                            })}
                        </div>
                    )}

                </div>
            ))}
            {

            }
        </>

    )
}

export default FooterBlock
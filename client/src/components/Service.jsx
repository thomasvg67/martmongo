import React from 'react';

const services = [
    {
        icon: 'pe-7s-settings',
        title: 'SETTING',
        delay: '0.1s',
    },
    {
        icon: 'pe-7s-safe',
        title: 'MONEY BACK',
        delay: '0.2s',
    },
    {
        icon: 'pe-7s-global',
        title: 'WORLDWIDE SHIPPING',
        delay: '0.3s',
    },
    {
        icon: 'pe-7s-headphones',
        title: 'Online support',
        delay: '0.4s',
    },
];

const Service = () => {
    return (
        <div>
            <section className="service-section">
                <div className="container">
                    <div className="row">
                        {services.map((service, index) => (
                            <div
                                className="col-md-3 col-sm-6 wow fadeInRight animated"
                                data-wow-delay={service.delay}
                                key={index}
                            >
                                <div className="service-item">
                                    <i className={service.icon}></i>
                                    <h3>{service.title}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                                        civibus efficiantur in. Nec id tempor imperdiet
                                        deterruisset, doctus volumus explicari qui ex, appareat
                                        similique an usu.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;

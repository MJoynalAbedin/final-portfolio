import React from 'react';

const Footer = () => {
    return (
        <div className="copyRight text-center">
            <p style={{ fontFamily: "Goergia", color: 'dimgray' }} className="pb-2">Copyright {(new Date()).getFullYear()} All Rights Reserved, Joynal Abedin</p>
        </div>
    );
};

export default Footer;
import React from 'react';

import RealTime from "../../features/RealTime/RealTime";

const Footer = () => {

    return (
        <footer>
            <ul className="current-time">
                <RealTime />
                <li className="date">
                    {Intl.DateTimeFormat("en", {dateStyle: "medium"}).format(Date.now())}
                </li>
            </ul>

        </footer>
    );
};

export default Footer;
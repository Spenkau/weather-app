import React, {useEffect, useState} from 'react';

const RealTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <li className="timer">
            {Intl.DateTimeFormat("ch", {timeStyle: "medium"}).format(currentTime)}
        </li>
    );
};

export default RealTime;
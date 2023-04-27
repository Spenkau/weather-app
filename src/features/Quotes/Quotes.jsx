import React, {useEffect, useState} from 'react';
import axios from "axios";
import {motion} from "framer-motion";

const Quotes = () => {
    const [quote, setQuote] = useState({});
    const [isRotated, setIsRotated] = useState(false)

    async function getData() {
        const res = await axios('https://type.fit/api/quotes');
        const data = await res.data;
        let rand = Math.round(0 - 0.5 + Math.random() * (data.length - 0 + 1));
        setQuote(data[rand])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="quotes">
            <motion.button
                onClick={() => {getData(); setIsRotated(!isRotated)}}
                animate={{ rotate: isRotated ? 360 : 0 }}
                transition={{ duration: 0.5 }}>
            </motion.button>
            <span className="quote-text">{quote.text}</span>
            <span className="quote-author">{quote.author}</span>
        </div>
    );
};

export default Quotes;
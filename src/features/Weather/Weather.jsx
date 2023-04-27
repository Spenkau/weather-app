import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import ErrorMessage from "../../components/Error/ErrorMessage";
import {useCookies} from "react-cookie";

const Weather = () => {
    const [data, setData] = useState({});
    const inputRef = useRef(null)
    const [city, setCity] = useState("");
    const [cookies, setCookie] = useCookies(["city"])
    const [isCorrect, setIsCorrect] = useState(null)

    useEffect(() => {
        setCity(cookies.city)
    }, [])

    const fetchWeatherData = async () => {
        try {
            const cityName = await translateCityName()
            const weatherData = await axios(`http://api.weatherapi.com/v1/current.json?key=c83248681119445383b102723232104&q=${cityName}&aqi=no`);
            setIsCorrect(true)
            setData(weatherData.data)
        } catch (e) {
            setIsCorrect(false)
        }
    }

    const translateCityName = async () => {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=${city}`);
        const data = await response.json();
        return data[0][0][0];
    }

    const getWeather = () => {
        setCity(inputRef.current.value)
        setCookie("city", inputRef.current.value)
        fetchWeatherData()
    }

    if (isCorrect) {
        return (
            <div className="weather-container">
                <input
                    type="text"
                    value={city}
                    id="city"
                    onClick={() => setIsCorrect(null)}
                    readOnly />
                <div className="weather-grid">
                    Ощущается как: {data.current.feelslike_c} &nbsp;
                    Температура: {data.current.temp_c}
                </div>
            </div>
        )
    }

    if (isCorrect !== true) {
        return (
            <div className="apply-city">
                <form className="get-weather" onSubmit={e => e.preventDefault()}>
                    {
                        isCorrect === false && <ErrorMessage/>
                    }
                    <input
                        id="city"
                        ref={inputRef}
                        defaultValue={cookies.city}
                        type="text"
                        placeholder={"Введите название города"}
                        onChange={e => {e.keyCode === 13 && getWeather()}}
                        name="city-input"/>
                    <button onClick={getWeather}>
                        ОК
                    </button>
                </form>
            </div>
        )
    }

};

export default Weather;
import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import ModalForm from "../ModalForm/ModalForm";
import Weather from "../../features/Weather/Weather";
import AudioPlayer from "../../features/AudioPlayer/AudioPlayer";
import Quotes from "../../features/Quotes/Quotes";

const Main = ({dayPart, setDayPart}) => {
    const [cookies, setCookie] = useCookies(["username"])
    const [modals, setModals] = useState('')
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        const hours = new Date().getHours()
        if (hours >= 6 && hours < 11) setDayPart('Доброе утро')
        else if (hours >= 11 && hours < 17) setDayPart('Добрый день')
        else if (hours >= 17 && hours < 21) setDayPart('Добрый вечер')
        else setDayPart('Доброй ночи')
    }, [])

    function handleUsernameChange(e) {
        setCookie("username", e.target.value)
    }

    function changeModalContent(name) {
        setShowModal(true);
        setModals(name)
    }

    function renderComponent() {
        switch (modals) {
            case "audio":
                return <AudioPlayer/>
            case "quotes":
                return <Quotes/>
            case "weather":
                return <Weather/>
            default: return;
        }
    }

    return (
        <main>
            <ul className="main-content">
                <li className="welcome-phrase show">
                    <span>{dayPart},</span>
                    <input
                        className="name-field"
                        value={cookies.username || ''}
                        onChange={handleUsernameChange}
                        type="text"
                        placeholder="имя"/>
                </li>
            </ul>
            <ul className="modals-nav">
                <li>
                    <button onClick={() => changeModalContent('weather')}>Узнать погоду</button>
                </li>
                <li>
                    <button onClick={() => changeModalContent('audio')}>Музыкальный плейлист</button>
                </li>
                <li>
                    <button onClick={() => changeModalContent('quotes')}>Фразы, хуязы, мб новости</button>
                </li>
            </ul>
            <ModalForm showModal={showModal} setShowModal={setShowModal}>
                {renderComponent()}
            </ModalForm>
        </main>
    );
};

export default Main;
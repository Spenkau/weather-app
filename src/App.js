import React, {useRef, useState} from "react";
import "./styles.scss"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    const [dayPart, setDayPart] = useState("")
    const wrapperRef = useRef(null)

    // const PATH = `/public/images/backs/`
    //
    // const randomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)]
    //
    // const daysTime = {
    //     morning: ['morning1', 'morning2', 'morning3', 'morning4', 'morning5', 'morning6', 'morning7'],
    //     day: ['day1', 'day2', 'day3', 'day4'],
    //     afternoon: ['afternoon1', 'afternoon2', 'afternoon3', 'afternoon4'],
    //     night: ['night1', 'night2', 'night3', 'night4', 'night5', 'night6'],
    // }
    //
    //
    // useEffect(() => {
    //     const defineImage = () => {
    //         switch (dayPart) {
    //             case "Доброе утро":
    //                 return PATH + randomIndex(daysTime.morning)
    //             case "Добрый день":
    //                 return PATH + randomIndex(daysTime.day)
    //             case "Добрый вечер":
    //                 return PATH + randomIndex(daysTime.afternoon)
    //             case "Доброй ночи":
    //                 return PATH + randomIndex(daysTime.night)
    //         }
    //     }
    //
    //     const image = defineImage()
    //     console.log(image)
    //     wrapperRef.current.style.backgroundImage = `url(${image})`
    // }, [])

    return (
        <div ref={wrapperRef} className="wrapper">
            <Header />
            <Main dayPart={dayPart} setDayPart={setDayPart}/>
            <Footer dayPart={dayPart} setDayPart={setDayPart} />
        </div>
    );
}





export default App;

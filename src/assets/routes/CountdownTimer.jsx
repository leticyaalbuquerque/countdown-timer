import React from "react"
import useCountdown from "../hooks/useCountdown"
import Title from "../components/Title"
import Counter from "../components/Counter"
import { useLocation } from "react-router-dom"

export default function CountdownTimer() {
    const {state} = useLocation()
    const [day, hour, minute, second] = useCountdown(state.date)

    return (
        <div className="relative w-screen h-screen bg-gradient-to-t to-very-dark-blue from-grayish-blue">
            <div className="relative w-screen h-screen bg-stars bg-no-repeat bg-cover bg-center flex items-center justify-center"></div>
            <div className="absolute top-0 w-screen h-full pt-36 px-6 flex flex-col items-center gap-12">
                <Title title={state.title} />
                <div className="w-full md:w-3/4 xl:w-1/2 grid grid-cols-4 gap-8">
                    <Counter title="Dias" number={day} />
                    <Counter title="Horas" number={hour} />
                    <Counter title="Minutos" number={minute} />
                    <Counter title="Segundos" number={second} />
                </div>
            </div>
            <div className="absolute bottom-0 z-0 self-end bg-pattern-hills bg-no-repeat bg-cover bg-center h-1/3 w-screen"></div>
        </div>
    )
}
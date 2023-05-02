import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const [data, setData] = useState({
        title: "",
        date: "",
    })

    const handleTitleChange = (e) => {
        setData({ ...data, title: e.target.value })
    }

    const handleDateChange = (e) => {
        setData({ ...data, date: e.target.value })
    }

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        if (!data.title || !data.date) return
        navigate("/countdown-timer/countdown", {state: data})
    }

    return (
        <div className="absolute z-10 w-[90%] md:w-3/4 xl:w-1/2 md:my-20 bg-white/20 rounded-lg px-4 py-10">
          <form className="flex flex-col items-center md:py-10">
            <h1 className="font-bold text-lg md:text-xl text-center text-very-dark-blue uppercase tracking-[0.4rem] pb-12">Contagem Regressiva</h1>
            <label htmlFor="title" className="font-semibold text-sm md:text-base text-center text-very-dark-blue pb-2">Título</label>
            <input onChange={handleTitleChange} type="text" placeholder="Ex.: Meu aniversário" className="w-full px-4 py-3 md:w-3/5 rounded-lg focus:border-b-4 border-dark-desaturated-blue font-semibold text-base text-center text-very-dark-blue outline-none transition-all duration-300 mb-8"/>

            <label htmlFor="date" className="font-semibold text-sm md:text-base text-center text-very-dark-blue pb-2">Data do evento</label>
            <input onChange={handleDateChange} type="datetime-local" className="w-full px-4 py-3 md:w-3/5 rounded-lg focus:border-b-4 border-dark-desaturated-blue font-semibold text-base text-center text-very-dark-blue outline-none transition-all duration-300 mb-8" />

            <button onClick={handleClick} type="submit" className="bg-dark-desaturated-blue hover:bg-very-dark-blue transition-colors duration-300 font-bold text-center text-white py-4 w-full md:w-1/3 rounded-lg">Criar contagem</button>
          </form>
        </div>
    )
}
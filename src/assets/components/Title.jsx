import React from "react"

export default function Title({ title }) {
    return (
        <h1 className="font-semibold text-lg md:text-xl text-center text-white uppercase tracking-[0.4rem]">{title}</h1>
    )
}
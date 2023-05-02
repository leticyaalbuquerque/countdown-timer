import React from "react";

export default function Counter({ title, number }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <span className="bg-dark-desaturated-blue w-full h-full py-3 md:py-6 lg:py-8 font-bold text-2xl md:text-6xl text-center text-soft-red rounded-lg border-b-[6px] border-solid border-very-dark-blue">{number}</span>
            <h2 className="font-semibold text-[8px] md:text-xs text-center text-white uppercase tracking-widest">{title}</h2>
        </div>
    )
}
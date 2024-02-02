"use client"
import { useState, useEffect } from "react";


export default function Filtro(content) {
    const [checkVisual, setCheckVisual] = useState('');
    function mostraCheck(){
        setCheckVisual(checkVisual == '' ? 'md:inline-block':'');
    }
    return (
        <div className="mx-auto">
            <div>
                <img src="" alt="" />
                <input id="input-text" type="text" value={content.content} name=""/>
            </div>
            <div>
                <div id="input-text" className="hidden md:flex flex-row justify-between min-w-64 lg:min-w-80 items-center pl-3 rounded-r-lg">
                    <div className="flex flex-row">
                        <input onClick={mostraCheck} type="checkbox" id="meuCheckbox" className="" />
                        <label htmlFor="meuCheckbox" className="label-checkbox">Full</label>
                        <p className="ml-1">time</p>
                        <p className="hidden lg:flex ml-1">only</p>
                        <img src="/assets/desktop/icon-check.svg" className={`hidden ${checkVisual} relative md:ml-[-91px] lg:ml-[-127px] pointer-events-none`} alt="" />
                    </div>
                    <button className="rounded bg-[#5964E0] h-9 lg:h-10 w-20 lg:w-28 mr-5">search</button>
                </div>
            </div>

        </div>
    );
}